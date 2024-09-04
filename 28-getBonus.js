// function bonusTime(salary, bonus) {
//     if(bonus === true){
//         return "£" + salary * 10;
//     }else{
//         return "£" + salary;
//     }
// }

// const bonusTime = (salary, bonus) => bonus === true ? "£" + salary * 10 : "£" + salary;

const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

console.log(bonusTime(10, true))
console.log(bonusTime(200, false))
console.log(bonusTime(5000, false))