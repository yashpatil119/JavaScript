console.log(undefined==null);//true
console.log(null==undefined);//true
console.log(10=='10');//convert string ToNumber
console.log(10=='12');//false, because after converting "12" Tonumber --> 12 and 10!=12.
console.log(false==0);//true --> as ToNumber(false)--> 0, 0==0-->true
console.log(true==10);//false tonumber(true)-->1 , and 1!==10 -->false
console.log(10== {valueOf() {return 10}});//here object get converted to ToPrimitive 10==10 -->True