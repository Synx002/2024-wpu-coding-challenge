// WPU Coding Challenge 2024
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks){
//     let result = 0;
//     for (let i = 0; i < marks.length; i++){
//         result += marks[i] ;
//     }
//     return Math.floor(result / marks.length);
// }

// function getAverage(marks){
//     return marks.reduce((acc, curr) => Math.floor(acc + curr / marks.length))
// }

// function getAverage(marks){
//     return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) /marks.length);
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

console.log(getAverage([1,1,1,1,1,1,1,2]));