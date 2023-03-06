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