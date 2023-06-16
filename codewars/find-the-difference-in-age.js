console.clear();

//cia mano sprendimas.
// function differenceInAges(ages){
//     let arr1 = [];
//     let max = 0;
//     let min = ages[0]
//     let ageDifference = 0;
//     for (let i = 0; i < ages.length; i++) {         
//         const item = ages[i];
//         if (item > max) {              
//             max = item;
//         }
//         if (ages[i] < min) {
//             min = ages[i];
//         }
//        ageDifference = max - min;
//     }
//     arr1.push(min);
//     arr1.push(max);
//     arr1.push(ageDifference)
    


//     return arr1;
//     }
    
// toki sprendima radau codewars.
function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);