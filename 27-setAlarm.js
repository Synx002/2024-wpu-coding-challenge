// function setAlarm(employed, vacation){
//     if(employed === true && vacation === true){
//         return false + ", " + "Should be false"
//     } else if (employed === false && vacation === true){
//         return false + ", " + "Should be false"
//     } else if (employed === false && vacation === false){
//         return false + ", " + "Should be false"
//     } else {
//         return true + ", " + "Should be true"
//     }
// }

// function setAlarm(employed, vacation){
//     if(employed === true && vacation === true) return false + ", " + "Should be false"
//     else if (employed === false && vacation === true) return false + ", " + "Should be false"
//     else if (employed === false && vacation === false) return false + ", " + "Should be false"
//     else return true + ", " + "Should be true"
// }

// const setAlarm = (employed, vacation) => employed === true && vacation === true ? false : employed === false && vacation === true ? false : employed === false && vacation === false ? false : true;

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, false));