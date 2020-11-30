
function filter(arr, func) { 
    let MyArray = [] 
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i]) === true) {
            MyArray.push(arr[i])
        }
    }
    return MyArray

}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const NameArray = ["Bella", "sofia", "max", "filip"]
const MyNameArray = filter(NameArray, x => x.length < 4) 
console.log(MyNameArray)
// TEST 3 - skriv själv
