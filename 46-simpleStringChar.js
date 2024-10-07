function solve(s) {
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let numberCount = 0;
    let specialCharCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char >= 'A' && char <= 'Z') {
            uppercaseCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowercaseCount++;
        } else if (char >= '0' && char <= '9') {
            numberCount++;
        } else {
            specialCharCount++;
        }
    }
    
    return [uppercaseCount, lowercaseCount, numberCount, specialCharCount];
}

console.log(solve("*'&ABCDabcde12345"));  // Output: [4, 5, 5, 3]
