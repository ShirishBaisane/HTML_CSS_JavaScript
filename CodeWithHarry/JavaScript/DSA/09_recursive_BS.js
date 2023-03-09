function recursiveBS(arr, target){
    return search(arr, target, 0, arr.length-1);
}
function search(arr, target, start, end){
    if(start>end){
        return -1;
    }

    let mid= Math.floor(start + (end-start)/2);
    if(arr[mid] === target) {
        return mid;
    } else if(target < arr[mid]){
        return search(arr, target, start, mid-1);
    } else {
        return search(arr, target, mid+1, end);
    }
}

// Big=O: O(log n)

console.log("Index: ", recursiveBS([-5,2,4,6,10], 10));
console.log("Index: ", recursiveBS([-5,2,4,6,10], 6));
console.log("Index: ", recursiveBS([-5,2,4,6,10], 20));