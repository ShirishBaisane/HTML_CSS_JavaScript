var a = 21;

var a = 35;//redeclaration of variable
console.log(a);


if(a==35){
    var b = 40;
    console.log(b);
}
console.log(b); // variables declared with 'var' keyword are not blocked scoped, they are function scoped.

function test(){
    var c = 100
    console.log(c);
}

test()
// console.log(c);//function scoped
