// function countWords(sentence){
//     var words = 0;
//     for(let i = 0; i < sentence.length; i++){
//         if(sentence[i] === " "){
//             words = words+ 1;
//         }
//     }
//         words = words+ 1;
//         return words
// }

// function countWords(sentence) {
//     let words = 0;

//     for (let i = 0; i < sentence.length; i++) {
//         // Jika karakter saat ini bukan spasi dan (karakter sebelumnya adalah spasi atau ini adalah karakter pertama)
//         if (sentence[i] !== " " && (i === 0 || sentence[i - 1] === " ")) {
//             words++;
//         }
//     }

//     return words;
// }

function countApla(str){
    var result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            result++;
        }
    }
    return result;
}


console.log(countApla("Nama saya budiono siregar"))