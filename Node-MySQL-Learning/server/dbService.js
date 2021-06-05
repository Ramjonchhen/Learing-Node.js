const { response } = require("express");
const mysql = require("mysql");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

let instance = null;

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        let query = "SELECT * from names";
        pool.query(query, (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }

          resolve(result);
        });
      });

      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async insertNewName(name) {
    const dateAdded = new Date();

    const insertID = await new Promise((resolve, reject) => {
      try {
        const query = "INSERT INTO names(name,dateadded) values(?,?)";
        pool.query(query, [name, dateAdded], (err, result) => {
          if (err) {
            throw new Error(err.message);
          }
          resolve(result.insertId);
          console.log("insert result", result.insertId);
        });
      } catch (err) {
        console.error(err);
      }
    });

    return {
      id: insertID,
      name: name,
      dateAdded: dateAdded,
    };
  }

  async deleteRowByID(id) {
    try {
      id = parseInt(id);

      const response = await new Promise((resolve, reject) => {
        let query = "DELETE FROM names where id = ?";

        pool.query(query, [id], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result.affectedRows);
        });
      });

      console.log(response);

      return response === 1 ? true : false;
    } catch (err) {
      console.error(err);
    }
  }

  async updateRowById(id,name) {
    try {
      id = parseInt(id);

      const response = await new Promise((resolve, reject) => {
        let query = "UPDATE names SET name = ? where id = ?";

        pool.query(query, [name,id], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result.affectedRows);
        });
      });

      console.log(response);

      return response === 1 ? true : false;
    } catch (err) {
      console.error(err);
    }
}

module.exports = DbService;
