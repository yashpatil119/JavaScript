let obj={};
console.log( obj.toString());//by default it gives [object object]  

let obj2={
    toStrings(){
        return "lets learn Javascript";
    }
};

console.log(obj2.toStrings());

let obj3={x:1};
console.log(obj3.valueOf());//by default it gives it return same object 

let obj4={};
console.log(10-obj4);//obj.valueo --> object,toString -->[object object]