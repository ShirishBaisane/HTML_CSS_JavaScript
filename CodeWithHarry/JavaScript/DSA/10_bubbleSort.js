function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function bubbleSort(arr){
    let swapped;
    do{
        swapped=0;
        for(let i=1; i<arr.length; i++){
            if(arr[i-1]>arr[i]){
                swap(arr, i-1, i);
                swapped++;
            }
        }
    } while(swapped != 0);
    return arr;
}
function bubbleSortRev(arr){
    let swapped;
    do{
        swapped=0;
        for(let i=arr.length-1; i>0; i--){
            if(arr[i]>arr[i-1]){
                swap(arr, i-1, i);
                swapped++;
            }
        }
    } while(swapped != 0);
    return arr;
}

// Big-O: O(n^2) -> Quadratic

console.log([-6,20,8,-2,4]);
console.log(bubbleSort([-6,20,8,-2,4]));
console.log(bubbleSortRev([-6,20,8,-2,4]));