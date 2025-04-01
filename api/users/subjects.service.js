const pool = require("../../config/database");

module.exports = {
  createSubject: (data, callBack) => {
    pool.query(
      `INSERT INTO coursesubjects (title, name, date, positive, negative, video, status) values(?,?,?,?,?,?,?)`,
      [
        data.title,
        data.name,
        new Date(),
        data.positive,
        data.negative,
        data.video,
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
  getSubjects: (callBack) => {
    pool.query(
      `SELECT id, title, name, category, positive, negative, video, status FROM subjects`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getSubjectById: (id, callBack) => {
    pool.query(
      `SELECT id, title, name, date, positive, negative, video  FROM coursesubjects WHERE id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateSubject: (data, callBack) => {
    pool.query(
      `UPDATE coursesubjects SET title=?, name=?, positive=?, negative=?, video=? WHERE id=?`,
      [
        data.title,
        data.name,
        data.positive,
        data.negative,
        data.video,
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
  deleteSubject: (data, callBack) => {
    pool.query(
      `DELETE FROM coursesubjects WHERE id=?`,
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
