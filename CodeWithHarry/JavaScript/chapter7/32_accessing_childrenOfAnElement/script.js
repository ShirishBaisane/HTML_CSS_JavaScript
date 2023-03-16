console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

console.log(typeof document.body.childNodes)
console.log(document.body.hasChildNodes())
console.log(document.body.childNodes[1])

let arr = Array.from(document.body.childNodes)
console.log(arr)