const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function registerEmployee(){
    r1.question('Enter employee name: ',(name) =>{
        r1.question('Enter a Birth (YYYY-MM-DD): ',(dod)=>{
            r1.question('Enter Joining Date (YYYY-MM-DD): ',(joiningDate)=>{
                r1.question('Enter Salary: ',(salary)=>{
                    if(!isValidDate(dod)|| !isValidDate(joiningDate)|| !isValidSalary(salary)){
                        console.log("invalid input. Please try again.");
                        r1.close();
                        return;
                    }
                    // Display employee details
                    console.log("\n Employee Details: ");
                    console.log(`Name:${name}`);
                    console.log(`Date of Birth: ${dod}`);
                    console.log(`Date of Joining: ${joiningDate}`);
                    console.log(`Salary: ${salary}`);
                    r1.close();


                });
            });
        });
    });
}

function isValidDate(dateString){
    return /^\d{4}-\d{2}$/.test(dateString);
}
function isValidSalary(salary){
    return/^\d+$/.test(salary)&&parseInt(salary)>0;
}

registerEmployee();