console.clear();
// Mano sprendimas:
// function findDifference(a, b) {
//     let item = 0;
//     for (let i = 0; i < a.length; i++) {
//     item = a[i];
//     }
//   {
//     let item2 = 0;
//     for (let x = 0; x < b.length; x++)
//     item2 = a[x];
//   }
//   let sum1 = a[0] * a[1] * a[2]
//   let sum2 = b[0] * b[1] * b[2]

//   if (sum1 > sum2) {
//     return sum1 - sum2
//   }
//   return sum2 - sum1
// }

//Populiariausias sprendimas: 
function findDifference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }



    console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
    console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
    console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
    console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
    console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);