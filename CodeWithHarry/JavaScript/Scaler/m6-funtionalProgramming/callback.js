/*
// Callback function 
function printFirstName(firstName, cb) {
    console.log(firstName)
    cb("Baisane")
}

printFirstName("Shirish", printLastName)

function printLastName(lastName){
    console.log(lastName);
}
*/
// printLastName("Baisane")


// Example
// check id the number is Even or not

const isEven = (n) => {return n%2 == 0}

let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num);
    console.log(`Is the number ${num} an Even number: ${isNumEven}`);
}

printResult(isEven, 16);
printResult(isEven, 11);
