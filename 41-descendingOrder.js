function descendingOrder(n){
    let result = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("")
    return parseInt(result)
}

console.log(descendingOrder(124124))