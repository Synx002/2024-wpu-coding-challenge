// const quarterOf = (month) => {
//     if(month < 4){
//         return 1;
//     }else if (month < 7){
//         return 2;
//     }else if (month < 10){
//         return 3;
//     }else if (month < 13){
//         return 4;
//     }else {
//         return false
//     }
// }

// const quarterOf = (month) => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;

const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(11));