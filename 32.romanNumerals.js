function solution(number){
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    
    let result = "";

    for (const { value, symbol } of romanNumerals) {
        // Selama angka lebih besar atau sama dengan nilai yang sedang diperiksa
        while (number >= value) {
          result += symbol; // Tambahkan simbol Romawi ke hasil
          number -= value;     // Kurangi nilai dari angka input
        }
      }
    
      return result;
}

//test

console.log(solution(1800));
console.log(solution(1987));
console.log(solution(2));
console.log(solution(1));
