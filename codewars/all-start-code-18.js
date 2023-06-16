console.clear();


function strCount(str, letter){
    let result = 0;
      if (str.length === 0){
        return 0;
      }
      for(let i = 0; i < str.length; i++){
           
        if (str[i] === letter){
          result++;
        }
      

        } 
      
        return result;
      }
      console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('djcehagjhiijeibjlacefjjlgilg', 'z'), 0);