let express = require('express');
const mariadb = require('mariadb');

let router = express.Router();

const pool = mariadb.createPool({
  host: process.env.database, 
  user: process.env.user, 
  password: process.env.password, 
  database: process.env.host, 
  connectionLimit: 5
});


/* GET users listing. */
router.get('/', (async (req, res, next) => {

  pool.getConnection()
    .then(conn => {
      conn.query("desc comments;")
  .then(rows => { // rows: [ {val: 1}, meta: ... ]
    console.log(rows);
  })
  .then(res => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
    conn.release(); // release to pool
  })
  .catch(err => {
    conn.release(); // release to pool
  })
}).catch(err => {
  //not connected
});

  res.send('respond with a resource');
}));

module.exports = router;