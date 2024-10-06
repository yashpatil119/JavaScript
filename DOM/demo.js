var a = document.querySelector("button");
var b = document.querySelector(".c");

a.addEventListener("click",function(){
    b.style.backgroundColor = "red";
})

var flag=0;

a.addEventListener("click",function(){
    if(flag==0){
        b.style.backgroundColor="red" ;
        a.innerHTML="on"
        console.log("clicked");
        flag=1;
    }
    else{
        b.style.backgroundColor="black";
        a.innerHTML="off"
        console.log(" again clicked");
        flag=0;
    }
})


    



    