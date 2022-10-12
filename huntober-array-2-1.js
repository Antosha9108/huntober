
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

function checkEquality(arr1,arr2) {
  arr1 = arr1.map((items)=>items.join('')).join('')
  arr2 = arr2.map((items)=>items.join('')).join('')
  console.log(arr1)
  console.log(arr2)
  return arr1 ===arr2
    }

    console.log(checkEquality(arr1, arr2))
