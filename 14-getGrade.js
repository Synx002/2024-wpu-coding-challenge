// function getGrade (s1, s2, s3) {
//     let total, mean, result;
//     total = s1 + s2 + s3;
//     mean = total / 3;

//     if (mean >= 90 && mean <= 100){
//         return "A"
//     } else if (mean >= 80 && mean <= 90){
//         return "B"
//     } else if (mean >= 70 && mean <= 80){
//         return "C"
//     } else if (mean >= 60 && mean <= 70){
//         return "D"
//     } else if (mean >= 0 && mean <= 60){
//         return "F"
//     }
// }

// function getGrade (s1, s2, s3) {
//     const score = (s1 + s2 + s3) / 3;
//     if (score < 60) return "F";
//     if (score < 70) return "D";
//     if (score < 80) return "C";
//     if (score < 90) return "B";
//     return "A"
// }

function getGrade (...s) {
    const score = s.reduce((acc, curr) => acc + curr) / s.length;
    if (score < 60) return "F";
    if (score < 70) return "D";
    if (score < 80) return "C";
    if (score < 90) return "B";
    return "A"
}


console.log(getGrade(95,90,93));
console.log(getGrade(58,59,60))