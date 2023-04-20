console.log('1. Square Star Pattern in Javascript')
for(let i=0;i<5;i++){
    let str=""
    for(let j=0; j<5;j++){
        str+='*'
    }
    
    console.log(str+'\n')
}

console.log('2. Hollow Square Pattern')
for(let i=0;i<5;i++){
    let str=""
    for(let j=0; j<5;j++){
        if(i==0 || i==4){
            str+='*'
        }else{
            if(j==0 || j==4){
                str+='*'
            }else{
                str+=' '
            }
        }
    }
    
    console.log(str+'\n')
}

console.log('3. Right Triangle Pattern in Javascript')
for(let i=0; i<5;i++){
    let str="", x=4-i
    for(let j=0;j<5;j++){
        if(j<x){
            str+=" "
        }else{
            str+="*"
        }
    }
    console.log(str+'\n')
}

console.log('4. Left Triangle Pattern in Javascript')
for(let i=0;i<5;i++){
    let str=""
    for(let j=0;j<=i;j++){
        str+="*"
    }
    console.log(str+'\n')
}

console.log('5. Downward Triangle Star Pattern')
for(let i=0; i<5; i++){
    let str="", x=5-i
    for(let j=0; j<x; j++){
        str+="*"
    }
    console.log(str+'\n')
}

console.log('6. Hollow Triangle Star Pattern')
for(let i=0; i<5; i++){
    let str=""
    for(let j=0; j<=i; j++){
        if(i<2 || i==4){
            str+="*"
        }else{
            if(j==0 || j==i){
                str+="*"
            }else{
                str+=" "
            }
        }
    }
    console.log(str+"\n")
}

console.log('7. Javascript Pyramid Pattern')
for(let i=0; i<5; i++){
    let str=""
    for(let j=0; j<5-i; j++){
        str+=" "
    }
    for(let k=0; k<2*i-1; k++){
        str+="*"
    }
    console.log(str+"\n")
}

console.log('8. Reversed Pyramid Star Pattern')
for(let i=0; i<5;i++){
    let str=""
    if(i!=0){
        for(let j=0; j<i;j++){
            str+=" "
        }
    }
    for(let k=0; k<2*(5-i)-1 ;k++){
        str+="*"
    }
    console.log(str+'\n')
}




console.log('')




console.log('')




console.log('')