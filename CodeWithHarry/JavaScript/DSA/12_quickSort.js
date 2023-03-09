function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

function quickSortRev(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[0];
    let left = []
    let right = []
    for(let i=1; i<arr.length; i++){
        if(arr[i]>pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSortRev(left),pivot,...quickSortRev(right)]
}

// Big-O: O(n^2) -> worst case
// Big-O: O(n log n) -> avg case

const arr = [-6,20,8,-2,4];
console.log(arr);
console.log(quickSort(arr));
console.log(quickSortRev(arr));