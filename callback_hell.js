//tasks
//1.write a functo to download data from url
//2.write function to save that downloaded data in files
//3.write a function to upload the file written in previous step to a newurl

function fetchTimeout(url,fn){
    //download content from url
    //this downloading can take some time
    //we will download content from url ,whatever is the result we will pass it to callback

    console.log("Staring downloading",url);

    setTimeout(function process(){
            console.log("download completed"); 
            let response="dummy data";
            fn(response);
            console.log("Ending function");
    },3000);
}

function writeFile(data,fn){
    console.log("Started writing");
    setTimeout(function process() {
        console.log("writing Completed");
        let filename="output.text";
        fn(filename);
        console.log("Writing Ended")
}, 4000);

}


function uploadFile(filename,fn,newurl){
    console.log("started uploading");
    setTimeout(function process() {
        console.log("file",filename,"uploaded Sucessfully on",newurl);
        let uploadResponse="SUCESS";
        console.log("Upload Ended");
    }, 5000);
}


fetchTimeout("www.google.com",function downloadcallback(response){
    console.log("downloaded Response is",response);

    writeFile(response,function writeCallback(filenameResponse){
        console.log("new file is written is",filenameResponse);

        uploadFile(filenameResponse,function uploadCallback(uploadResponse){
            console.log("sucessfully uploaded");
        })
    })
});