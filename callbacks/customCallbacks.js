function mapper(arr,fn){
    //arr ---> element of array is stored in arr
    //fn is callback function which having index i and value v

    let result = [];
    for(let i=0;i<arr.length;i++){
      //i=index v=value
      let res=fn(arr[i],i);
      result.push(res);
    }
    return result;

}
let arr=[1,2,3,4,5,6];
let x= mapper(arr,function cuber(v,i){
    console.log(v,v*v*v,i); 
    return v*v*v;
});
console.log(x,arr);