
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let dp = [];

dp[0] = arr[0];

let maxSum = dp[0];

for (let i = 1; i < arr.length; i++) {

    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);

    maxSum = Math.max(maxSum, dp[i]);

}

console.log("Maximum Subarray Sum:", maxSum);
