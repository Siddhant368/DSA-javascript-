let num = 6;

let isPrime = true;

if(  num <= 1){
     isPrime = false;
}

for(  i = 2 ; i<=Math.sqrt(num); i++){

     if(num % i === 0){
        isPrime = false;
        break;
     }

}
 console.log(isPrime ? "prime ": "not prime")