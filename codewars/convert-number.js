console.clear();

function digitize(n) {
    let string = '' + n
    return string.split('').map(Number).reverse()
   }


   console.log(digitize(35231),[1,3,2,5,3]);
    console.log(digitize(0),[0]);