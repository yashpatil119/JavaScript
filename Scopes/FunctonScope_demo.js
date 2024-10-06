var name="sanket";

function fun(){
       console.log("Greetings",name);
      var x= 10;
   function test(){
    console.log("test",x);//here we can access the var x only inside fun function ,x is local to fun
   }    
   test();
   console.log(x)
}

function hello(){
    console.log("Hello",name);
}

fun();
hello();