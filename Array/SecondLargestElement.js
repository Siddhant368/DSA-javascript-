let arr = [10,20,30,40,50,60,70,100,1111
    
];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i =0; i < arr.length; i++){

    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];

    }
    else if(arr[i] > secondLargest && arr[i] !== largest){
        secondLargest = arr[i];

    }
}

if(secondLargest === -Infinity) {
    console.log("not exist");

} else{
    console.log("second largest:", secondLargest)
}
