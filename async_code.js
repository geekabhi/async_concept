
function f1() {
  console.log("I am f1()");
  return f2()
}

function f2() {
  setTimeout(f2_duplicate, 5000);
}

function f3() {
  console.log("I am f3()");
  return "Himanshu"
}

function f2_duplicate(){
  console.log("I am f2()");
  setTimeout(function(){
    console.log("I am f2_duplicate()");
    return f3()
  }, 2000)

}

var v = f1()
//console.log(v);
