//Anonymous Functions
let test1 = function(){
    console.log(1)
}


let test2 = function(a){
    console.log(a*2)
}


let test3 = function(a,b){
    console.log(a+b)
}

test1()
test2(4)
test3(2,6)
console.log()

// Arrow Function
let test11 = () => console.log(1)


let test21 = a => {
    console.log(a*2)
}


let test31 = (a,b) => {
    console.log(a+b)
}

test11()
test21(4)
test31(2,6)
console.log()