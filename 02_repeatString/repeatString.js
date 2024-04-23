const repeatString = function(sString, nNum) {

    let stringChain = "";

        for (let i = 0; i < nNum; i++){
            if (i === 0){
            stringChain = sString;
            }
            else{
            stringChain = stringChain + sString;
            }
    } 
    if (nNum < 0){
        return "ERROR";
    }
    else
        return(stringChain);
}

// Do not edit below this line
module.exports = repeatString;
