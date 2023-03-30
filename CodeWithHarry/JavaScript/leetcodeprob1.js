/*
// problem1

function strStr(haystack, needle){
    for(let i=0; i<haystack.length; i++){
        if(haystack[i]==needle[0]){
            console.log("true")
            let count=1, k=i+1;
            for(let j=1; j<needle.length; j++){
                if(haystack[k]==needle[j]){
                    count++, k++  
                }
            }
            if(count==needle.length){
                // return i;
                console.log("Index: ", i)
            }
        }
    }
}

let haystack = "this a predefined problem, pre-req,,,,...,sdsdjbjjdnfldd bwdj dprev sshd gdpre", needle = "pre"
console.log("Index: ",strStr(haystack, needle))
*/
/*
// Problem 2
let address1 = "255.100.50.0"
let address2 = "1.1.1.1"
function defangIPaddr (address) {
    // let newAdd = address.replaceAll(".","[.]")
    // return newAdd
    address = Array.from(address)
    // console.log(address)
    for(let i=0; i<address.length; i++){
        if(address[i]=="."){
            address[i] = "[.]"
        }
    }
    let string =""
    for(let i=0; i<address.length; i++){
        string = string.concat(address[i])
    }
    return string    
};
console.log(defangIPaddr(address1))
console.log(defangIPaddr(address2))
*/

// const users = {
//     Alan: {
//       online: false
//     },
//     Jeff: {
//       online: true
//     },
//     Sarah: {
//       online: false
//     }
//   }
  
//   function countOnline(usersObj) {
//     // Only change code below this line
//     let count=0
//     for(let name in usersObj){
//       console.log(name)
//       console.log(usersObj[name].online)
//       if(name['online']==true){
//         count++
//       }
//     }
//     return count;
//     // Only change code above this line
//   }
  
//   console.log(countOnline(users));


// function largestOfFour(arr) {
//     let largestNumberIndexI=0, largestNumberIndexJ=0, i=0, j=0
//     while(i<arr.length){
//       if(arr[i][j]>=arr[largestNumberIndexI][largestNumberIndexJ]){
//         largestNumberIndexI=i;
//         largestNumberIndexJ=j;
//       }
//       j++
//       if(j==arr[i].length){
//         i++
//         j=0
//       }
//     }
  
//     return arr[largestNumberIndexI];
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// function titleCase(str) {
//     let arr = Array.from(str)

//     for(let i=0; i<arr.length; i++){
//       if(arr[i] != " "){
//         arr[i] = arr[i].toUpperCase()
//         console.log(arr[i])
//         // i++
//         while(arr[i+1] != " " && i+1<arr.length){
//           i++;
//           arr[i] = arr[i].toLowerCase();
//           console.log(arr[i])
//         }
//       }
//     }
//     str = arr.join("")
//     return str;
//   }
  
//   console.log(titleCase("sHoRt AnD sToUt"));


//   function bouncer(arr) {
//     let resultArr = []
//     for(let i=0; i<arr.length; i++){
//       if(arr[i] != false && arr[i] != null && arr[i] != 0 && arr[i] != "" && arr[i] != undefined && arr[i] != NaN){
//         resultArr[resultArr.length] = arr[i]
//       }
//     }
  
//     return resultArr;
  
//   }
  
//   console.log(bouncer([false, null, 0, NaN, undefined, ""]));


// function mutation(arr) {
//     let sample = arr[0]
//     // console.log(sample)
//     let target = arr[1]
//     // console.log(target)
//     for(let i=0; i<target.length; i++){
//     //   let index = searchIndex(sample, target.charAt(i))
//       let index = bSearchIndex(sample, target.charAt(i))
//     //   console.log(index)
//     //   console.log(target.charAt(i))
//       if(index == -1){
//         return false
//       }
//     }
//     return true;
//   }
//   function searchIndex(strArr, target){
    
//     for(let i =0; i<strArr.length; i++){
//       if(strArr.charAt(i).toUpperCase() == target.toUpperCase()){
//         return i;
//       }
//     }
//     return -1;
//   }

// //   Solve below for binarySearch
//   function bSearchIndex(strArr, target){
//     let sortArr = Array.from(strArr);
//     let sortStr = sortArr.sort();
//     // console.log(sortStr)
//     let start = 0
//     let end = sortStr.length-1
//     while(start<=end){
//         mid=str
//     }


//     // for(let i =0; i<strArr.length; i++){
//     //   if(strArr.charAt(i).toUpperCase() == target.toUpperCase()){
//     //     return i;
//     //   }
//     // }
//     // return -1;
//   }
  
//   console.log(mutation(["hello", "Hello"]));
//   console.log(mutation(["hello", "hey"]));
//   console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
//   console.log(mutation(["Mary", "Aarmy"]));
//   console.log(mutation(["hello", "neo"]));
//   console.log(mutation(["Tiger", "Zebra"]));
//   console.log(mutation(["Noel", "Ole"]));


function whatIsInAName(collection, source) {
  let arr = []
  let propArr = Object.keys(source)
  let prop = propArr[0]
  console.log(prop)
  
  // for(let obj in collection){
  //   console.log(obj.prop)
  //   if(obj.hasOwnProperty(prop)){
  //     if(obj.prop == source.prop){
  //       arr.push(obj)
  //     }
  //   }
  // }

  for(let i=0; i<collection.length; i++){
    console.log(collection[i].hasOwnProperty(prop))
    console.log(collection[i][prop])
    console.log(source[prop])
  }
  // console.log(arr)
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });