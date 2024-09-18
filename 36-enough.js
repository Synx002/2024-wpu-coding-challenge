// function enough(cap, on, wait) {
//     if (cap >= on + wait){
//         return 0;
//     }else {
//         return on - wait;
//     }
// }

// const enough = (cap, on, wait) => (cap >= on + wait ? 0 : wait - (cap - on));

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}

console.log(enough(20, 10, 20));