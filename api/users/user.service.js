const pool = require("../../config/database");

module.exports = {
  createUser: (data, callBack) => {
    pool.query(
      `INSERT INTO userprofiles (firstname, lastname, email, contact, address, gender, registrationDate, renewalDate, status, city) values(?,?,?,?,?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.email,
        data.contact,
        data.address,
        data.gender,
        new Date(),
        new Date(),
        data.status,
        data.city,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `SELECT id, firstname, lastname, contact, email, gender, registrationDate, renewalDate, address, city, status FROM userprofiles`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log("results", results);

        return callBack(null, results);
      }
    );
  },
  getUserById: (id, callBack) => {
    pool.query(
      `SELECT id, firstname, lastname, contact, email, gender, registrationDate, renewalDate, address, city, status FROM userprofiles WHERE id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    console.log("data", data);

    pool.query(
      `UPDATE userprofiles SET firstname=?, lastname=?, contact=?, email=?, gender=?, address=?, city=?, status=?, renewalDate=? WHERE id=?`,
      [
        data.firstname,
        data.lastname,
        data.contact,
        data.email,
        data.gender,
        data.address,
        data.city,
        data.status,
        data.renewalDate,
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
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM userprofiles WHERE id=?`,
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
