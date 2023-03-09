function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let NTI = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>NTI){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = NTI;
    }
}

function insertionSortRev(arr){
    for(let i=arr.length-2; i>=0; i--){
        let NTI = arr[i];
        let j = i+1;
        while(j<=arr.length-1 && arr[j]>NTI){
            arr[j-1] = arr[j];
            j++;
        }
        arr[j-1] = NTI;
    }
}

// Big-O: O(n^2) -> Qudratic

const arr = [-6,20,8,-2,4];
console.log(arr);
insertionSort(arr);
console.log(arr);
insertionSortRev(arr);
console.log(arr);