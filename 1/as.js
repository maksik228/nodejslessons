function displaySync(callback){
    callback();
}

console.log("Начало работы программы");

setTimeout(function(){
        console.log("timeout 1000");
}, 1000);

setTimeout(function(){
        console.log("timeout 2000");
}, 2000);

setTimeout(function(){
        console.log("timeout 0");
}, 0);

displaySync(function(){console.log("without timeout")});

console.log("Завершение работы программы");
