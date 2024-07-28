//tasks
//1.write a functo to download data from url
//2.write function to save that downloaded data in files
//3.write a function to upload the file written in previous step to a newurl
function fetchdata(url){
    return new Promise(function (resolve,reject){
        console.log("started downloading data",url);
        setTimeout(function processDownloading() {
        let data="dummy data";
        console.log("download completed");
        resolve(data)
        },4000);
    })
}

function writefile(data){
    return new Promise(function (resolve,reject){
        console.log("Started writing",data,"in the file");
        setTimeout(function processWriting() {
            let filename ="result.txt";
            console.log("File Written Succesfully");
            resolve(filename);
            
        }, 5000);
    })
}

function UploadFile(file,url){
    return new Promise(function(resolve,reject){
        console.log("Upload started on Url",url,"filename is",file);
        setTimeout(function processUploading() {
            let result="sucesss";
            console.log("Uploading Done");
            resolve(result)
            
        }, 3000);
    })
}

/*let dowloadPromise=fetchdata("www.gig.com");
dowloadPromise.then(function processDownload(value){
    console.log("Download Promise fulfilled");
    let writePromise=writefile(value);
    writePromise.then(function processWriting(value){
        console.log("Writing is done");
        console.log("Filename is",value);
    });
})*/
//above piece of code solves problem of inversion control but still get in promise hell


let downloadPromise=fetchdata("www.giig.com");
downloadPromise
.then(function processDownload(value){
    console.log("Downloading done with the followign value",value);
    return value;//Every .then itself returns new Promise which is consumed by next .then
})

.then(function processWrite(value){
    writefile(value);
})

.then(function processUpload(value){
    UploadFile(value);
})
