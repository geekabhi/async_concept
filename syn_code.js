
function f1() {
  console.log("I am f1()");
  return f2()
}

function f2() {
    console.log("I am f2()");
    return f3()
}

function f3() {
  console.log("I am f3()");
  return "Himanshu"
}

var v = f1()
console.log(v);
