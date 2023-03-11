const obj = {
    name: 'Shirish',
    age: 27,
    "key three": true,
    sayMyName: function(){
        console.log("Hello "+this.name)
    }
}
obj.hobby = "football"
console.log(obj)
delete obj.hobby
console.log(obj)

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key three'])
obj.sayMyName()

//Object.keys() .value() .entries()