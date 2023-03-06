//Excercise 1 -Guess the number

const prompt = require("prompt-sync")()
console.log("\t\t***Guess the Number Game***")
console.log("Guess the number number in the range 1-100 in 20 guesses")

//to generate random number
const randomNum =  Math.floor(Math.random() * 100)

let count=0, num, k=true, maxAttempt=20

while(k){
    num = prompt("Guess the number: ")
    if(num<=100 && num>=0){
        if(num>randomNum){
            console.log("You guessed a number greater than the target number, try again!")
        }else if(num<randomNum){
            console.log("You guessed a number lesser than the target number, try again!")
        } else {
            console.log(`You guessed the target number ${randomNum}, congratulations!`)
            k=false
        }
        count++
    } else {
        console.log("Enter number in the range(0 to 100)")
    }
    if(count==maxAttempt){
        console.log(`You have reached maximum attempts to guess the target number (${randomNum}), Thanks for playing!!!!`)
        k=false
    }
}
