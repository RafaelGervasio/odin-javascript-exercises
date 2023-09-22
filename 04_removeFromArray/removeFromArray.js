function removeFromArray (array, ...args){
        return array.filter(x => !args.includes(x))
    }

// Do not edit below this line
module.exports = removeFromArray;


// ✓ removes a single value (4 ms)
// ✕ removes multiple values (6 ms)
// ✓ ignores non present values (1 ms)
// ✕ ignores non present values, but still works (1 ms)
// ✕ can remove all values (3 ms)
// ✕ works with strings (1 ms)
// ✕ only removes same type (2 ms)