const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)
console.log("Last Element child of b is: ", b.lastElementChild)

console.log("Previous Element sibling of b is: ", b.previousElementSibling)
// console.log("Next Element child of b is: ", b.nextElementChild)
