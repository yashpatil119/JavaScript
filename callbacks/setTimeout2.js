let id1=setTimeout(function exr1() {
    console.log("task 1 completed")
},3000);
let id2=setTimeout(function exr2() {
    console.log("task 2completed")
    clearTimeout(id2);
},3000);

