const express = require("express");
const app = express();

app.use(function(request,responce){
  responce.sendFile(__dirname+"/htmlforsend/index.html");
});

app.listen(3000);
