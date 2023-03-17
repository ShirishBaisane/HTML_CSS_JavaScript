// Q!
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Q2
// check in browser

// Q3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"


// Q4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "red"
})

// Q5
// none of these