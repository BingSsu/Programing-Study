var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next){
  if(req.session.logined){
    res.render('logout', {session: req.session})
  } else {
    res.render('login', {session: req.session})
  }
})
router.post('/login', function(req,res,next){
  if(req.body.id === 'dalkom' && req.body.pw === 'itword'){
    req.session.regenerate(function(){
      req.session.logined = true;
      req.session.user_id = req.body.id;

      res.render('logout', {session: req.session})
    })
  }
})


module.exports = router;
