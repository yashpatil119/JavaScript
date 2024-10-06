console.log("Sanket" + {"a":10});
/**
 *"Sanket" is already a primitive so it will print as string
 * {"a":10} is not a primitive, So We call toPrimitive without hint 
 * means hint=number
 * we first call valueOf() on {"a":10} and it will return same object
 * so we call toString() on toString will return '[object object]'

 */

 console.log(10-{"a":100});
 /**
  * 10 is a already a number 
  * {"a":100} is going to get get conveted into ToNumber ,and this an object
  * for object we call ToPrimitive with hint=number
  * then we call valueOf() it will return same object={"a":100}
  * then we will ToString() it will return '[object object]' which is primitive
  * So we call ToNumber on '[object object]' again which gives NaN
  * 10-Nan =NaN
  */