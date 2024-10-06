let str="Javascript";
let freqMap={};//Empty

for(const char of str){
    if(freqMap[char]){
        freqMap[char]++;//if present Update it 
    }
    else{
        freqMap[char]=1;//if Not Present add it
    }
}

console.log(freqMap);