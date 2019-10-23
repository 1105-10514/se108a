var array = [0,1]
function fibonacci (n) {
  if (array[n]!= null) return array[n]
  array[n]= 3*(fibonacci (n - 1)) + 2*(fibonacci(n - 2))
  return array [n]
}

var startTime = Date.now()
console.log('fibonacci(1)=', fibonacci(1))
console.log('fibonacci(2)=', fibonacci(2))
console.log('fibonacci(3)=', fibonacci(3))
console.log('fibonacci(20)=', fibonacci(20))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)
