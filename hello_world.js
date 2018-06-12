// hello world in express

// always gotta require framework before using it
var express = require('express');

var app = express();

// deal with requst when received
// route handler
app.get('/' , function(req,res) {
  res.send('Hello World');
} );


// listen to port 3000, respond when received request
app.listen(3000,function() {
    console.log('Example app listening on port 3000!');
} );

var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
  res.send('WIKI HOME PAGE');
} );

// About page route
router.get('/about',function(req,res) {
  res.send('ABOUT WIKI');
} );

module.exports = router;
