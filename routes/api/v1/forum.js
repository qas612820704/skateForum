var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('pong!');
})

module.exports = router;
