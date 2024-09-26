// function getCount(str) {
//     let arr = ["a", "i", "u", "e", "o"];
//     let counter = 0;
//     for(let i = 0; i <= str.length; i++){
//         if(arr.includes(str[i])){
//             counter++
//         }
//     }
//     return counter
// }

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

console.log(getCount("kontolodon"))