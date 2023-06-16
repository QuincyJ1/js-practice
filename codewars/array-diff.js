console.clear();

function arrayDiff(a, b) {
    let result = [];
    if(b.length === 0){
        return a;
    }else if(a.length === 0){
        return a;
    }
    for(let i = 0; i < a.length; i++){
        let found = false;
        for(let j = 0; j < b.length; j++){
            if(a[i] === b[j]){
                found = true;
                break;
        }
    }
    if(!found){
        result.push(a[i]);
    }
}
    return result;
}
    
  
  



  console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")