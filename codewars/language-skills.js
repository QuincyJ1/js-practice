console.clear();

//Mano sprendimas:
// function myLanguages(obj) {
//     let result = [];
//     for (let i in obj) {
//       if (obj[i] > 59) {
//         result.push(i);
//       }
//     }
//     return result.sort((a, b) => obj[b] - obj[a]);
//   }


//Trumpiausias sprendimas: 
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }




console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])