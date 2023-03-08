// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     let count = 0;
//     for(let i=2; i<num; i++){
//         if(num%i==0){
//             count++;
//         }
//     }
//     if(count==0){
//         return true;
//     } else {
    //         return false;
    //     }
    // }
    // Big-O: O(n) -> Linear
    
//Optimized Solution
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
// Big-O: O(sqrt(n))

console.log("Is 1 prime number? ", isPrime(1));
console.log("Is 2 prime number? ", isPrime(2));
console.log("Is 4 prime number? ", isPrime(4));
console.log("Is 5 prime number? ", isPrime(5));
console.log("Is 137 prime number? ", isPrime(137));
console.log("Is 133 prime number? ", isPrime(133));
