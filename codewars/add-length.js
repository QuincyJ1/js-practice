console.clear();

function addLength(str) {
  

const arr1 = str.split(' ').map(x => {
    return x + ' ' + x.length;
})
    return arr1
    }



    const actual = addLength('apple ban')
    console.log(actual, "You need to return an array. Did you log to the console instead?");
    console.log(actual, ["apple 5", "ban 3"]);
 console.log(addLength('you will win'),["you 3", "will 4", "win 3"])