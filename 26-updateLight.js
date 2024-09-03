// function updateLight(current) {
//   if(current === "green"){
//     return "yellow"
//   }  else if (current === "yellow") {
//     return "red"
//   } else {
//     return "green"
//   }
// }

const updateLight = (current) => current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));