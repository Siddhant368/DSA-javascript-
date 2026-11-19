//Find the Second Smallest Element
let arr = [10 , 20, 30 , 40 , 50 ,60];

let smallest = Infinity;
let secondSmallest = Infinity;

for(let i = 0; i<arr.length; i++){

    if(arr[i] < smallest){

        secondSmallest = smallest;
        smallest = ar[i];

    }

else if(arr[i] < secondSmallest && arr[i] !== smallest) {
    secondSmallest = arr[i];
}
}

if(secondsmallest === Infinity){
    console.log("second smallest does not exist");

}else{
    console.log("second smallest", secondSmallest);
}