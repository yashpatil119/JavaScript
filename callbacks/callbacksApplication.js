let arr=[1,2,4,5,6];

let x=arr.map(function process(v,i){
    //v-->print value
    //i-->print index
    console.log(v,i);
    return v*v;
});

console.log(x);
console.log(arr);