console.clear();

function testEven(n) {
    //Your awesome code here!
   
  if (n % 2 !== 0) {
    return false
  } else {
    return true
  }
  
}

console.log(testEven(0), true, "testEven for 0");
    console.log(testEven(0.5), false, "testEven for 0.5");
    console.log(testEven(1), false, "testEven for 1");
    console.log(testEven(6), true, "testEven for 2");
    console.log(testEven(-4), true, "testEven for 2");