const reverseString = function(string) {
    newString = ''
    
    for (i=(string.length-1); i>=0; i--){
        
        newString += string[i]
        
        // console.log(newString)
        // console.log(i)

    }

    return newString

};

// Do not edit below this line
module.exports = reverseString;
