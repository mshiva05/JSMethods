const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
console.log(array) // returns original array.
//*********************************************************************************************
//*********************************************************************************************
//Array.forEach()
// syntax -  array.forEach(call_back)
// array.forEach((item, index, array)=>{
// }
//properties
// - doesn't mutate original array
// - e1 - can be used to perform side effects like logging each element inside array
// - e2 - can update original array with some code (not recommended)
// - e3 - doesn't return anything
// example-1 console log
array.forEach((item) => console.log('item', item))

// example-2 update same array
array.forEach((item, index, array) => {
  array[index] = Number(item) + 1
})
console.log('updated array', array)

//example-3 undefined return from forEach
const returnArray = array.forEach((item) => {
  return item * 2
})
console.log('returnArray', returnArray)
