const sumAll = function(firstInt, secondInt) {

    if (firstInt < 0 ||
        secondInt < 0 || 
        typeof firstInt != "number" ||
        typeof secondInt != "number"){
        return "ERROR";
    }

    let smallInt = firstInt;
    let bigInt = secondInt;

    if (firstInt > secondInt){
        smallInt = secondInt;
        bigInt = firstInt;
    }

    let sum = smallInt;

    for (let i = smallInt; i <= bigInt; i++){
        if (i > smallInt){
            sum = sum + i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
