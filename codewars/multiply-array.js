console.clear();


function multiplyAndFilter(array, multiplier){
    return array.filter(x => typeof x === 'number').map(x => x * multiplier)
  }

// function multiplyAndFilter(array, multiplier){
//     return array.filter(v=>typeof v === 'number').map(v=>v*multiplier)
//   }

  console.log(multiplyAndFilter([1,2,3,4], 1.5), [1.5, 3, 4.5, 6]);
console.log(multiplyAndFilter([1,2,3], 0), [0, 0, 0]);
console.log(multiplyAndFilter([0,0,0], 2), [0, 0, 0]);
console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3), [3,7.5,30]);