function isGreaterThan5(element ,index, array){
    return element>5;
}

function fun(){
    let array = [2,5,8,1,4];
    let value = array.some(isGreaterThan5);
    console.log(value);
}
fun();