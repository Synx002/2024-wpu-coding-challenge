// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (mpg * fuelLeft >= distanceToPump){
//             return true;
//     }else{
//         return false;
//     }
//   };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump; 


console.log(zeroFuel(50, 25, 2))