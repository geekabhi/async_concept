var fs = require("fs");

// Asynchronous read
function f2() {
  setTimeout(function(){
    console.log("f2");
  }, 5000);
}
f2();

//Asynchronous
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data);
});

// Synchronous read
var data = fs.readFileSync('input.txt');

console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
