// function boolToWord(bool){
//     if(bool === true){
//         return "Yes";
//     }
//         return "No";
// }

// function boolToWord(bool){
//     return bool === true ? "Yes" : "No";
// }

const boolToWord = (bool) => bool ? "Yes" : "No";

console.log(boolToWord(true))
console.log(boolToWord(false))