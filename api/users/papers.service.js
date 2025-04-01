const pool = require("../../config/database");

module.exports = {
    createPaper: (data, callBack)=>{
        pool.query(`INSERT INTO practice_papers (typeofpaper, maincategory, name, duration, noofsubjects, indiv_subs, indiv_mins, indiv_cutoff, papercutoff, status, date, prepared) values(?,?,?,?,?,?,?,?,?,?,?,?)`, 
            [data.typeofpaper, data.maincategory, data.name, data.duration, data.noofsubjects, data.indiv_subs, data.indiv_mins, data.indiv_cutoff, data.papercutoff, 0, new Date(), 0],
            (error, results, fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },
    getPapers: callBack => {
        pool.query(`SELECT id, typeofpaper, maincategory, name, duration, noofsubjects, indiv_subs, indiv_mins, indiv_cutoff, papercutoff, status, date, prepared FROM practice_papers`,
        [],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results)
        }
    ); 
    },
    getPaperById: (id,callBack) => {
        pool.query(`SELECT id, typeofpaper, maincategory, name, duration, noofsubjects, indiv_subs, indiv_mins, indiv_cutoff, papercutoff, status, date, prepared FROM practice_papers WHERE id=?`,
        [id],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0])
        }
    );
    },
    updatePaper: (data,callBack) => {
        pool.query(`UPDATE practice_papers SET typeofpaper=?, maincategory=?, name=?, duration=?, noofsubjects=?, indiv_subs=?, indiv_mins=?, indiv_cutoff=?, papercutoff=? WHERE id=?`,
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
            data.id
        ],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0])
        }
    )
    },
    deletePaper: (data,callBack) => {
        pool.query(`DELETE FROM practice_papers WHERE id=?`,
        [data.id],
        (error, results, fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0])
        }
    )
    },
   

    
}