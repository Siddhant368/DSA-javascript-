let n = 5;

for (let i = 1; i <=n; i++){
    let pattern = "";

    for(let j = i; j <=n; j++){
        pattern += "*  ";
    }

    console.log(pattern);
}