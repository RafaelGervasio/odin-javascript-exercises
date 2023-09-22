const sumAll = function(a, b) {
    sum = 0
    
    if (b<a){
        c = b
        b = a
        a = c
    }

    if(a<0 || b<0){
        return "ERROR"
    }

    if (typeof a != 'number' || typeof b != 'number'){
        return "ERROR"
    }

    for (i=a; i<=b; i++){
        sum+=i
    }
    
    return sum
};

// Do not edit below this line
module.exports = sumAll;
