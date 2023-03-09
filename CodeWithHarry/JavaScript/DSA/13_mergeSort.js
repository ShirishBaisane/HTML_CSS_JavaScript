//step-1
function mergeSort(arr){
    if(arr.length <2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
// step-2
function merge(lArr, rArr){
    let arr = [];
    while(lArr.length && rArr.length){
        if(lArr[0]<=rArr[0]){
            arr.push(lArr.shift())
        } else {
            arr.push(rArr.shift())
        }
    }
    return [...arr, ...lArr, ...rArr];
}

//step-1
function mergeSortRev(arr){
    if(arr.length <2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return mergeRev(mergeSortRev(leftArr), mergeSortRev(rightArr));
}
// step-2
function mergeRev(lArr, rArr){
    let arr = [];
    while(lArr.length && rArr.length){
        if(lArr[0]>=rArr[0]){
            arr.push(lArr.shift())
        } else {
            arr.push(rArr.shift())
        }
    }
    return [...arr, ...rArr, ...lArr];
}


// Big-O: (n log n) =>This is the best sorting algo in the 4 algo we studied.


const arr = [-6,20,8,-2,4];
console.log(arr);
console.log(mergeSort(arr));
console.log(mergeSortRev(arr));