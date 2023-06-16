console.clear();

function removeEveryOther(arr){
   let newArray = arr.filter((item, idx) => ((idx + 1) % 2 !== 0))
   return newArray
  }


  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
  console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
  console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);