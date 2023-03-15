alert("Hello your script works")
let a = prompt("Enter the value of 'a' here: ", "578")
a = Number.parseInt(a)
alert("You have entered 'a' of type: "+ typeof(a))
let write = confirm("Do you want to write it to the page?")
if(write){
    document.write(a)
} else {
    document.write("Please allow me to write!!!")
}