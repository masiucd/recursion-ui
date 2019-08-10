const express = require('express');

const router = express.Router();

router.get('/rev/:name', (req, res) => {
  res.render('test', {
    name: 'marcell',
    age: 22,
    pos: 'dev',
    dog: req.query.dog,
  });
});

module.exports = router;
