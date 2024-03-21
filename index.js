const express = require('express');
const app = express();
const router = express.Router();
 
const path = __dirname + '/views/';
const port = 3000;
 
router.get('/', function(req,res){
  res.json("Welcome Ayush");
});
 
 
app.use(express.static(path));
app.use('/', router);
 
app.listen(port, function () {
  console.log('Listening on port 3000!');
})