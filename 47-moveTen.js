function moveTen(s) {
    let shiftedString = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (/[a-zA-Z]/.test(char)) {
            let charCode = char.charCodeAt(0);
            let isUpperCase = (charCode >= 65 && charCode <= 90);

            // Calculate new char code and wrap around using modulo
            if (isUpperCase) {
                char = String.fromCharCode(((charCode - 65 + 10) % 26) + 65); // Uppercase letters
            } else {
                char = String.fromCharCode(((charCode - 97 + 10) % 26) + 97); // Lowercase letters
            }
        }
        
        shiftedString += char;
    }
    
    return shiftedString;
}

console.log(moveTen("Hello"))