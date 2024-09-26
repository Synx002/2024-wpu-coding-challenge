function getCount(str) {
    let arr = ["a", "i", "u", "e", "o"];
    let counter = 0;
    for(let i = 0; i <= str.length; i++){
        if(arr.includes(str[i])){
            counter++
        }
    }
    return counter
}

console.log(getCount("kontolodon"))