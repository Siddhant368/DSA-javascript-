
let arr = [10, 9, 2, 5, 3, 7, 101, 18];

let n = arr.length;

let dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {

    for (let j = 0; j < i; j++) {

        if (arr[i] > arr[j]) {

            dp[i] = Math.max(dp[i], dp[j] + 1);

        }

    }

}

console.log("Longest Increasing Subsequence:", Math.max(...dp));
