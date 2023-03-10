function cartesianProduct(arr1, arr2){
    let arrProduct = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            let arrElement = [];
            arrElement.push(arr1[i])
            arrElement.push(arr2[j])
            arrProduct.push(arrElement)
        }
    }

    return arrProduct;
}

// Big-O: O(n*m)

const A = [1,2], B = [3,4];
let result1 = cartesianProduct(A, B);
console.log(result1);
const C = [1,2], D = [3,4,5];
let result2 = cartesianProduct(C, D);
console.log(result2);