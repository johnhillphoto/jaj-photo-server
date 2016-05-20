var router = require('express').Router();
module.exports = router;
var Photo = require('../.././db/db.js').Photo;
var multer = require('multer');


var util = require("util");
var fs = require('fs');
var upload = multer({ dest: './server/uploads/',
filename:'test.jpg '});


console.log('loaded this dude');

router.get('/', function(req, res, next){
  res.send('Hi there');
});


router.post('/', upload.single('myPhoto'), function (req, res, next) {
  console.log(req.file);
  fs.renameSync('./server/uploads/'+ req.file.filename, './server/uploads/'+ req.file.filename + '.jpg');
  res.sendStatus(200);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});
