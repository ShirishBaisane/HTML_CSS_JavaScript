//Chapter 1 - Q1
let a = "Shirish"
let b = 07
console.log(a+b)

//Chapter 1 - Q2
console.log(typeof (a+b))

//Chapter 1 - Q3
const perosnalDetails = {
    UserName : "Shirish",
    phNo : 7575757575,
}
// perosnalDetails = 45 //TypeError: Assignment to constant variable.

//Chapter 1 - Q4
perosnalDetails['friend'] = "Rohit"
perosnalDetails['sport'] = "Football"
console.log(perosnalDetails)

//Chapter 1 - Q5
const dict = {
    yakka : "work, especially hard work.",
    blur : "a thing that cannot be seen or heard clearly.",
    deprivation : "the damaging lack of material benefits considered to be basic necessities in a society.",
    relinquish : "voluntarily cease to keep or claim; give up.",
    antifragile : "becoming more robust when exposed to stressors, uncertainty, or risk. "
}
console.log(dict['yakka'])
console.log(dict['antifragile'])
console.log(dict.blur)