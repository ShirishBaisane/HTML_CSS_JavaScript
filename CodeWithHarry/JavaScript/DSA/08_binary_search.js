function binarySearch(arr, target){

    let start=0, end = arr.length-1;
    while(start<=end){
        mid = Math.floor(start+(end-start)/2);
        if(arr[mid]===target){
            return mid;
        } else if(target<arr[mid]){
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return -1;
}

// Big=O: O(log n)

console.log("Index: ", binarySearch([-5,2,4,6,10], 10));
console.log("Index: ", binarySearch([-5,2,4,6,10], 6));
console.log("Index: ", binarySearch([-5,2,4,6,10], 20));