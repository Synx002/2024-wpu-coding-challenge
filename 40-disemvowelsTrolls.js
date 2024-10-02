// function disemvowelTrolls(str) {
//     var result = "";
//     var vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
//     for (let i = 0; i < str.length; i++) {
//         let isVowel = false;
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i].toLowerCase() === vowels[j]) {
//                 isVowel = true;
//                 break;
//             }
//         }
//         if (!isVowel) {
//             result += str[i];
//         }
//     }
//     return result;
// }

function disemvowelTrolls(str){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => !vowels.includes(char)).join('');
}

console.log(disemvowelTrolls("This website is for losers LOL!"));
console.log(disemvowelTrolls("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowelTrolls("What are you, a communist?"));