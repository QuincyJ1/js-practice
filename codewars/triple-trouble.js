console.clear();


function tripleTrouble(one, two, three){
    let newWord = ''
    for(let i = 0; i<one.length;i++){
        newWord += one[i] + two[i] + three[i];
    }
    return newWord;
  }






console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
    console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
    console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
    console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
    console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");