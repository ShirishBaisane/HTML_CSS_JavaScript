function climbingStaircase(steps){
    let arr = [1,2]
    for(let i=2; i<=steps; i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[steps-1]
}

// Big-O: O(n) -> Linear

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));