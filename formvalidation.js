let email='123ashad';
let password='123ashadashad';

let emailchecker=function(myString){
  if ((myString.includes(123)) && (myString.length > 8)) {
    return true;

  }
  return false;




}



let passwordchecker=function(mystring){
  if ((!mystring.includes(email))&&(mystring.length>8)) {

    return true;
  }
  return false;
}

console.log(passwordchecker(password));
