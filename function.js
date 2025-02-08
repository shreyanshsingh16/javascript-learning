let userName = 'shreyansh';

function showMessage() {
  userName = "aman"; //changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // shreyansh before the function call

showMessage();
console.log( userName );// Aman, the value was modified by the function




let userName1 = "Shreyansh";

function showMessage1(){
   
   let userName1 = "Aman";
    let message1 ="Hello   " + userName1
    console.log(message1);
}
showMessage1();
console.log(userName1);// John, unchanged, the function did not access the outer variable this because of the let keyword used in the function to change the value of the variable userName1