
function max(arr) {
let Largest = arr [0] 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
        Largest = arr[i]
    }
} 
return Largest
}

function min(arr) {
let Smallest = arr[0]
for (let i = 0; i < arr.length; i++){
    if (arr[i] < Smallest){
        Smallest = arr [i]
    }
} 
return Smallest
}

function mean(arr) {
    let result = 0 
    for (let i = 0; i < arr.length; i++){
        result = result + arr[i]
    }
return result/arr.length
    // Ledtråd: Börja med att räkna ut summan av alla element
}

const array = [10, 7, 6, 9, 4, 20] 
console.log(max(array))
console.log(min(array))
console.log(mean(array))