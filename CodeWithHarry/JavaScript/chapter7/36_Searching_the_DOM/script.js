// change the card title to red
// let cTitle = document.getElementsByClassName("card-title")[0]
// cTitle.style.color = "red"

// let cTitleID = document.getElementById("myFirstID1")
// cTitleID.style.color = "blue"

let cTitles = document.querySelectorAll(".card-title")
console.log(cTitles)
cTitles[0].style.color = "blue"
cTitles[1].style.color = "red"
cTitles[2].style.color = "green"

document.querySelector(".this").style.color = "cyan"
document.querySelector(".this").style.background = "black"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))