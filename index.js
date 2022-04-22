let myArray = ['apple', 'banana', 'kiwi', 'grapefruit']
let newFruit = 'apple'

function findString(myArray, newFruit){
    if (myArray.includes(newFruit)) {
        return true
    } else { 
        return false
    } 
}

console.log(findString(myArray, newFruit))




