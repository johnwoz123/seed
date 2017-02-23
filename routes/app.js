var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

// the :msg is used to set up to be able to recieve the post from POSt message
router.get('/message/:msg', function(req, res, next) {
  // res.render('node', {message: 'hello!'});
  res.render('node', {message: req.params.msg});
});

router.post('/message', function(req,res,next) {
  var message = req.body.message;
  //redirect to only get routes
  res.redirect('/message/' + message)
})

module.exports = router;
