//Find largest number in array

let arr = [10, 45, 23, 89, 12, 67];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest number:", largest);