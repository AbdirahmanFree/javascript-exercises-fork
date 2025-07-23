const palindromes = function (string) {
    let stringNew = string.toLowerCase()
    let frontPointer = 0;
    let endPointer = stringNew.length -1;
    while (frontPointer< endPointer){
        function isAlpha(ch){
            if((ch.charCodeAt(0)>= 97 && ch.charCodeAt(0) <=122) || (ch.charCodeAt(0) >=65 && ch.charCodeAt(0) <= 91)){
                return true;
            }
            else{
                return false;
            }
        }

        function isPunc(ch){
            if(ch == '.' || ch == ',' || ch == '!' || ch == ' '){
                return true;
            }
            else {
                false;
            }
        }
        while(frontPointer < endPointer){
            if(isPunc(stringNew.charAt(frontPointer)) && isPunc(stringNew.charAt(endPointer))){
                frontPointer +=1;
                endPointer -=1;
                continue;
            }
            if(isPunc(stringNew.charAt(frontPointer))){
                frontPointer +=1
                continue;
            }
            if (isPunc(stringNew.charAt(endPointer))){
                endPointer -=1
                continue;
            }
            if(stringNew.charAt(frontPointer) == stringNew.charAt(endPointer)){
                frontPointer +=1;
                endPointer -=1;
            }
            else{
                return false
            }
        }
        return true;




    
    }
    

};

// Do not edit below this line
module.exports = palindromes;
