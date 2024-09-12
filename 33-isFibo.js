function isFibo(a,b,f) {
    if (f === a || f === b) {
        return true;
    }
    while (b <= f) {
        // Jika angka saat ini sama dengan f, maka f adalah bagian dari deret
        if (b === f) {
            return true;
        }
        // Hitung angka Fibonacci berikutnya
        let temp = a + b;
        // Update nilai a dan b
        a = b;
        b = temp;
    }
    // Jika loop selesai dan f tidak ditemukan, kembalikan false
    return false;
}

console.log(isFibo(0,1,2))
console.log(isFibo(1,4,10))
console.log(isFibo(4,5,23))
console.log(isFibo(100,101,301))
console.log(isFibo(1,3,1))