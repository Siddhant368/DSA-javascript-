let arr = [10, 20, 30, 40, 50, 60, 70];

let smallest = Infinity;
let secondSmallest = Infinity;
let thirdSmallest = Infinity;

for(let i = 0; i < arr.length; i++){

    if(arr[i] < smallest){

        thirdSmallest = secondSmallest;
        secondSmallest = smallest;
        smallest = arr[i];

    }
    else if(arr[i] < secondSmallest && arr[i] !== smallest){

        thirdSmallest = secondSmallest;
        secondSmallest = arr[i];

    }
    else if(arr[i] < thirdSmallest && arr[i] !== secondSmallest && arr[i] !== smallest){

        thirdSmallest = arr[i];

    }
}

if(thirdSmallest === Infinity){
    console.log("Third smallest does not exist");
}
else{
    console.log("Third smallest number is:", thirdSmallest);
}