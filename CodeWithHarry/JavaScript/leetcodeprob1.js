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