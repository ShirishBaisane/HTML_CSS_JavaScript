function fibonacci(position){
    if(position==1 || position==0){
        return "Fibonacci sequence has initial 2 position reserved as '0' and '1' resptively."
    }
    let arr = [0,1];
    if(position==2){
        return arr;
    } else {
        for(let i=2; i<position; i++){
            arr[i] = arr[i-1] +arr[i-2];
        }
        return arr;
    }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

//Big-O: O(n) -> Linear