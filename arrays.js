
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 
function addElementToBeginningOfArray(chocolateBars){
  return ["foo", ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBar){
  chocolateBars.unshift("foo");
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars){
  return [...chocolateBars, "foo", ];
}
 
function destructivelyAddElementToEndOfArray(chocolateBar){
  chocolateBars.push("foo");
  return chocolateBars;
}
function accessElementArray (array, index) {
  return (array [index]);
}