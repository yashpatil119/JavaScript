function fetchData(url){
    new Promise(function (resolve,reject){
         setTimeout(function process(data) {
            let data="dummy Data";
            console.log("completed fetching the data");
            //somehow we need to return the data? TODO
            
            resolve(data);//Return some data on sucess


            
         }, 4000);
    });
}

function fetch1(url){
    return new Promise(function(resolve,reject){
        for(let i=1;i<10000;i++){
            //some logic
        }
        console.log("completed");
        resolve("Yash")
    });
}