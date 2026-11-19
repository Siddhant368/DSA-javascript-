//Using Dynamic Programming (Memoization)
function fibonacci(n, dp = {}) {

    if (n <= 1) {
        return n;
    }

    if (dp[n] !== undefined) {
        return dp[n];
    }

    dp[n] = fibonacci(n - 1, dp) + fibonacci(n - 2, dp);

    return dp[n];

}

console.log(fibonacci(7));

//. Using Recursion

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(7));

//Using Loop


let n = 7;

let first = 0;
let second = 1;

for (let i = 2; i <= n; i++) {

    let third = first + second;

    first = second;
    second = third;

}

console.log(second);
