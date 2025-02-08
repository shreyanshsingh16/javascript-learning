console.log("Shreyansh");

   
function person(firstName, lastName, age, eye) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eye;
}


const me = new person('shreyansh', 'singh', 24, 'brown');
console.log(me.firstName + " is " + me.age + " Hello Everyone"+"<br>");
const myFather = new person('Father', 'singh', 50, 'brown');
console.log(myFather.firstName + " is " + myFather.age + " years old."+"<br>");
const myMother = new person('Mother', 'singh', 48, 'brown');
console.log(myMother.firstName + " is " + myMother.age + " years old."+"<br>");
const myBother = new person('Brother', 'singh', 20, 'brown');
console.log(myBother.firstName + " is " + myBother.age + " years old."+"<br>");


const persons = [me,myFather, myMother, myBother];
let adultCount = 0;

persons.forEach(person => {
if (person.age >= 18) {
adultCount++;
}
});

console.log("Number of adults: " + adultCount  );