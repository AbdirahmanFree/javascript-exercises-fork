const reverseString = function(string) {
    revString = ""
    for (let i = string.length; i >= 0; i--){
        revString = revString +  string.charAt(i)
    }
    return revString    
};

// Do not edit below this line
module.exports = reverseString;
