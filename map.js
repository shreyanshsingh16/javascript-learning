let numbers = [4,9,16, 25]; 
let sub = numbers.map(sunstone);
function sunstone(){
    return numbers.map(Math.sqrt);
}
    console.log(sub);

