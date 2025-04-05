const pool = require("../../config/database");

module.exports = {
  createPackage: (data, callBack) => {
    pool.query(
      `INSERT INTO packages (name, price, date, status) values(?,?,?,?)`,
      [data.name, data.price, new Date(), 0],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPackages: (callBack) => {
    pool.query(
      `SELECT id, name, price, status FROM packages`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },
  getPackageById: (id, callBack) => {
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
  updatePackage: (data, callBack) => {
    pool.query(
      `UPDATE practice_papers SET typeofpaper=?, maincategory=?, name=?, duration=?, noofsubjects=?, indiv_subs=?, indiv_mins=?, indiv_cutoff=?, papercutoff=?, status=? WHERE id=?`,
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
        data.status,
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
  deletePackage: (data, callBack) => {
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
