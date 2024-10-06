var name="sanket";

function fun(){
       console.log("Greetings",name);
      
   function test(){
    console.log("test");//test fn is not globally available.
   }    
}

function hello(){
    console.log("Hello",name);
}

fun();
hello();