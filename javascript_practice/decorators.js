function doublingDecorator(f) {        // (1)
  return function() {
    return 2*f.apply(this, arguments)
  } 
}

// Usage:

function sum(a, b) {
  return a + b
}

var doubleSum = doublingDecorator(sum)          // (2)

console.log(doubleSum(100,40) ) // 6
console.log(doubleSum(5,25) ) // 10