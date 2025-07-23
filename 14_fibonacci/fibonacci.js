const fibonacci = function(num) {
    let n = Number(num) 
    if (n < 0){
        return "OOPS"
    }
    if (n <= 1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n -2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
