/**#### 1. Get total orders
* Return the total amount of orders. 
*/

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]
const summing = orders.entries
console.log(summing)

/**#### 2. Increment by 1
* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements. */
let numbersToIncrement = [3, 45, 6, 56, 7, 9]
numbersToIncrement.forEach((numberIncremented, index)=>{
    console.log("Index", + index+1,  ":",numberIncremented+1)
})
console.log("========================")
/**#### 3. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop. */
function filterEvens() {
    let array1 = [
        1,
        2,
        3,
        11,
        12,
        13
    ]
    let array2 = [
        22,
        2,
        31,
        110,
        6,
        13
    ]
//for array1
    const evenNums = array1.filter(arrayNumbers => arrayNumbers % 2 == 0)
    console.log("The even numbers in array1 =", evenNums)
//for array2
const evenNums2 =array2.filter(arrayNumbers2=> arrayNumbers2 % 2 ===0,)
console.log("The evens for evenNumb2", evenNums2)
}
filterEvens()

// 4 Given an array, create a function which filters array based on a search query
/**const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"]; */
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"]
function filterItems(arr, query) { 
    return arr.filter(function(item)
    { return item.toLowerCase().indexOf(query.toLowerCase()) !== -1})
    
}
console.log(filterItems(friends, "ri"))
console.log(filterItems(friends, "e"))
console.log(filterItems(friends, "a"))

// ___________________________________

/**#### 5. Sum Up
* Write a function called sum that uses the reduce method to sum up an array of numbers.*/ 

let numbersToSumUp = [1,2,3,4,5]
let numbersToSumUp2 =[6,7,7]
//const sumOfNums = numbersToSumUp=>numbersToSumUp.reduce((a,b)=> a+b,0)
//console.log(sumOfNums(numbersToSumUp))

function totaling(a, b,i) {
    const total= numbersToSumUp.reduce((a,b) => a+b,0)
    return total

 }
console.log(totaling())

function totaling2(a, b,i) {
     const total2= numbersToSumUp2.reduce((a,b) => a+b,0)
    return total2
}
console.log(totaling2())

/**#### 6. Square Root
* Given an array of numbers, find the square root of each element in the array. */

let numberArray = [8, 16,32,64,128, 256,512,1024]
const squareRoot = numberArray.map(Math.sqrt)
console.log(squareRoot)


