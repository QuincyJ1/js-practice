
console.clear()

  

var splitInParts = function(s, partLength){
    let arr=[];
    for (let i=0;i<s.length;i+=partLength){
    arr.push(s.slice(i,i+partLength))
    }
    return arr.join(' ')
  }
  
  
  console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
  console.log(splitInParts("HelloKata", 1), "H e l l o K a t a")
  console.log(splitInParts("HelloKata", 9), "HelloKata")
 
  