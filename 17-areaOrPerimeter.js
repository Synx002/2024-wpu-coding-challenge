// WPU Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab


// const areaOrPerimeter = function(l , w) {
//     let area = w * l;
//     let perimeter = w + w + l + l;
//     if (w === l){
//         return area
//     } else {
//         return perimeter
//     }
// };

// const areaOrPerimeter = function(l , w) {
//     let area = w * l;
//     let perimeter = w + w + l + l;
//     if (w === l) return area
//     return perimeter
// };

// const areaOrPerimeter = function(l , w) {
//     if (w === l) return w * l;
//     return w + w + l + l;
// };

const areaOrPerimeter = function(l , w) {
    return (w === l) ? w * l : 2 * (w + l);
};


console.log(areaOrPerimeter(3,  3));
console.log(areaOrPerimeter(6, 10));