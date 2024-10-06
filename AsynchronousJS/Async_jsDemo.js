function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Excuted Some Task");
    },3000);

    for(let i=0;i<1000000;i++){
        //some task
    }
    console.log("End");
}

process();