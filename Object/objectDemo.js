
let x={name:"Yash",age:21};//how to create an Object

let y={
    name:"Sarthak",
    age:22,
    marks:12
}

//how to access an object

console.log(x["name"]);
console.log(y.name);

//How to Update an Object

y.name="Krish";
console.log(y);

//how to add new Property to Object
x.marks=24;
console.log(x);
//how to delete a Property from Object
delete x.age;
console.log(x); 