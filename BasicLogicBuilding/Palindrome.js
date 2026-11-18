let str = "siddhant";
let reversed = "";

for(let i = str.length-1; i >= 0; i--){
    reversed = reversed + str[i];

}

if(reversed === str) {
    console.log("its palindrom");
}
else{
    console.log("not palindrom");
}