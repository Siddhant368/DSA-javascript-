let arr = [10, 20, 30 ,40, 50];

let largest = -Infinity;
let secondLargest = -Infinity;
let thirdLargest = -Infinity;

for(let i = 0; i < arr.length; i++){

    if(arr[i] > largest) {

        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = arr[i];

    }
    else if(arr[i] > secondLargest && arr[i] !== largest){
        thirdlargest = secondLargest;
        secondLargest = arr[i];

    }
    else if(arr[i] > thirdLargest && arr[i] !== secondLargest && arr[i] !== largest){
        thirdLargest = arr[i];

    }
}

if(thirdLargest === -Infinity){
    console.log("third largest does nit exist");

}
else{
    console.log("Third largest", thirdLargest)
}