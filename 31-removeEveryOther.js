// function removeEveryOther(arr){
//     const newArr = [];
//     for(let i = 0; i <= arr.length; i += 2){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// function removeEveryOther(arr){
//     return arr.filter((el, i) => i % 2 == 0 );
// }

const removeEveryOther = (arr) => arr.filter((el, i) => i % 2 == 0 );

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))