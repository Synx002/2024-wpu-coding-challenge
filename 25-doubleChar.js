// function doubleChar(str) {
//     let result = "";
//     for(i = 0; i < str.length; i++){
//         result += str[i];
//         result += str[i];
//     }
//     return result;
// }

const doubleChar = (str) => str.split("").map((el) => el + el).join("");


console.log(doubleChar("illuminati"));
  