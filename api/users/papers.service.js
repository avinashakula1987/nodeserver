const pool = require("../../config/database");

module.exports = {
  createPaper: (data, callBack) => {
    console.log("data service", data);

    pool.query(
      `INSERT INTO practice_papers (typeofpaper, maincategory, name, duration, noofsubjects, indiv_subs, indiv_mins, indiv_cutoff, papercutoff, status, date, prepared) values(?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.typeofpaper,
        data.courseCategory,
        data.name,
        data.duration,
        data.noofsubjects,
        data.indiv_subs,
        data.indiv_mins,
        data.indiv_cutoff,
        data.papercutoff,
        0,
        new Date(),
        0,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPapers: (callBack) => {
    pool.query(
      `SELECT 
             p.id, 
             p.typeofpaper, 
             p.maincategory, 
             p.name, 
             p.duration, 
             p.noofsubjects, 
             p.indiv_subs, 
             p.indiv_mins, 
             p.indiv_cutoff, 
             p.papercutoff, 
             p.status, 
             p.date, 
             p.prepared,
             GROUP_CONCAT(cs.title) AS indiv_sub_titles
           FROM practice_papers p
           LEFT JOIN coursesubjects cs 
             ON FIND_IN_SET(cs.id, p.indiv_subs)
           GROUP BY p.id`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        // Process the results to append mins and cutoff to each title
        const processedResults = results.map((row) => {
          const titles = row.indiv_sub_titles
            ? row.indiv_sub_titles.split(",")
            : [];
          const mins = row.indiv_mins ? row.indiv_mins.split(",") : [];
          const cutoffs = row.indiv_cutoff ? row.indiv_cutoff.split(",") : [];
          const titlesWithDetails = titles.map((title, index) => {
            const min = mins[index] || ""; // Get the corresponding min or empty if not available
            const cutoff = cutoffs[index] || ""; // Get the corresponding cutoff or empty if not available
            return `${title.trim()} (${min.trim()}) (-${cutoff.trim()})`;
          });
          return {
            ...row,
            indiv_sub_titles: titlesWithDetails.join(", "),
          };
        });

        return callBack(null, processedResults);
      }
    );
  },
  getPaperById: (id, callBack) => {
    pool.query(
      `SELECT id, typeofpaper, maincategory, name, duration, noofsubjects, indiv_subs, indiv_mins, indiv_cutoff, papercutoff, status, date, prepared FROM practice_papers WHERE id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updatePaper: (data, callBack) => {
    pool.query(
      `UPDATE practice_papers SET typeofpaper=?, maincategory=?, name=?, duration=?, noofsubjects=?, indiv_subs=?, indiv_mins=?, indiv_cutoff=?, papercutoff=? WHERE id=?`,
      [
        data.typeofpaper,
        data.maincategory,
        data.name,
        data.duration,
        data.noofsubjects,
        data.indiv_subs,
        data.indiv_mins,
        data.indiv_cutoff,
        data.papercutoff,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deletePaper: (data, callBack) => {
    pool.query(
      `DELETE FROM practice_papers WHERE id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
