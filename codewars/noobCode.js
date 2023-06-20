console.clear();
//mano sprendimas:
reverse = function(array) {
    let result = [];
      for (let i = array.length -1; i = 0; i--){
          result.push(array[i])
          
      }
    return result
    }
  // atrodo gan protingas sprendimas: 
//   reverse = function(array) {
//     return array.map((c, i) => array[array.length - 1 - i]);
//   }


  console.log( reverse([1,2,3]), [3,2,1] )
  console.log( reverse([1,null,14,"two"]), ["two",14,null,1] )

//    const opa = num1.toString()
//    const opa2 = operation.toString()
//   const opa3 = num2.toString()
//   const veiksmas = opa 
//    let arr = [];
//    arr.push(opa);
//    arr.push(opa2);
//    arr.push(opa3);
//    for (let i = 0;)