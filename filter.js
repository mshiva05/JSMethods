const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
console.log(array) // returns original array.
//*********************************************************************************************
//*********************************************************************************************
//Filter Method
//syntax- Array.filter(callback_function)
//array.filter((item, index, array)=>{
//return condtion}
//e1-doesn't manipulate original array
//e2-if condition is not met, returns empty array
//e3-return is mandatory
//e4- new filter is shallow copy of original array
//e1
const evenArray = array.filter((item) => {
  item % 2 === 3
})
console.log('even array', evenArray)
console.log('original array', array)
