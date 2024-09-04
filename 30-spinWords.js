// function spinWords(string){
//     return string
//         .split(' ')
//         .map(word => {
//             if(word.length >= 5){
//                 return word.split('').reverse().join('');
//             }
//             return word;
//         })
//         .join(" ");
// }
const spinWords = (string) => string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(" ");

console.log(spinWords("Hello World"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("Welcome"))