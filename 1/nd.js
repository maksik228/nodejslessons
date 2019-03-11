const http = require("http");
let message = "Hello World!!!";
http.createServer(function(request,response){

    //console.log(message);
    setTimeout(function(){
    response.end("Hello World!");
  }, 5000);

    response.write(message);

}).listen(3000, "127.0.0.1",()=>{
    console.log("Сервер начал прослушивание запросов");
});
