
let arr = [2, 7, 9, 3, 1];

let dp = [];

dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {

    dp[i] = Math.max(
        dp[i - 1],
        arr[i] + dp[i - 2]
    );

}

console.log("Maximum Money:", dp[arr.length - 1]);
