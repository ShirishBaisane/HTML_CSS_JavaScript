const num = Math.floor(Math.random() *100);
console.log(num)
let computerChoice;
if(num>=0 && num<34){
    computerChoice = 'S'
}else if(num>=34 && num<67){
    computerChoice = 'W'
} else {
    computerChoice = 'G'
}

alert("Let's play the game!!!")
let choice = prompt("Enter the choice(S='Snake'/W= 'Water'/G='Gun':")
if(choice=='S' && computerChoice=='W'){
    alert("You win!!")
} else if(choice=='G' && computerChoice=='W'){
    alert("You lose!!")
} else if(choice=='S' && computerChoice=='G'){
    alert("You loose!!")
} else if(choice=='W' && computerChoice=='G'){
    alert("You win!!")
} else if(choice=='G' && computerChoice=='S'){
    alert("You win!!")
} else if(choice=='G' && computerChoice=='W'){
    alert("You loose!!")
} else {
    alert("Tie!!")
} 