Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {
    return str.split('').sort().join('');   
}

// [a,0][b,1][c,2]...

//how does sort work 

[a,b,c,d,e,f,g...]

charAt(0) a

AlphabetSoup("Display this sentence backwARDS!")