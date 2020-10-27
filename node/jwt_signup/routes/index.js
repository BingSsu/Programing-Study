let express = require('express');
let router = express.Router();
let mariadb = require('mariadb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
