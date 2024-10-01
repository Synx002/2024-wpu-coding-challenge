function countWords(sentence){
    var words = 0;
    for(let i = 0; i < sentence.length; i++)
        if(sentence[i] === " "){
            words = words+ 1;
        }
        words = words+ 1;
        return words
    }


console.log(countWords("Nama saya budiono siregar"))