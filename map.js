const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
console.log(array) // returns original array.
//*********************************************************************************************
//*********************************************************************************************
//Map Method
//syntax- array.map(call_back)
// aaray.map((item, index, array)=>{
//return item})
//Note - Doesn't mutate original array
//will perform action on each item in array and return new array
// if return statement is ignored, it will retunr undefined items
const multiple2 = array.map((item) => {
  return item * 2
})
console.log('multiple2', multiple2)
console.log('original array', array)

const errorArray = array.map((item) => {
  item * 2
})

console.log('errorArray', errorArray)
