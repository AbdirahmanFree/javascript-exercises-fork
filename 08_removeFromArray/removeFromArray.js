const removeFromArray = function(arr,target, ...theArgs) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target || theArgs.includes(arr[i])){
            arr.splice(i,1)
            i--;
        }
    }
    console.log(arr)
    return arr
    

};

// Do not edit below this line
module.exports = removeFromArray;
