const powers = n => {
    const result = [];
    let power = 0;
    let bigN = BigInt(n); // Ubah n menjadi BigInt

    // Iterasi selama bigN masih lebih besar dari 0
    while (bigN > 0n) {  // Menggunakan BigInt untuk perbandingan
        // Jika bit paling kanan bernilai 1, tambahkan 2^power ke array hasil
        if (bigN & 1n) {
        result.push(2 ** power); // Tetap gunakan angka biasa untuk hasil array
        }

        // Geser bit bigN ke kanan dan tingkatkan nilai power
        bigN = bigN >> 1n;  // Menggeser bigN menggunakan BigInt shift
        power++;
    }

    return result;
};

console.log(powers(9007199254740991))