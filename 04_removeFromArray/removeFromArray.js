const removeFromArray = function() {

    let aArray = arguments[0];

    for (i = 1; i < arguments.length; i++){
        for (j = 0; j < aArray.length; j++){
            if (aArray[j] === arguments[i]){
                aArray.splice(j, 1);
                j = j - 1;
            }
        }
    }

    return aArray;

};

// Do not edit below this line
module.exports = removeFromArray;
