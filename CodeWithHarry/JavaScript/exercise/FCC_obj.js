function countdown(n){
  if(n<1){
    return [];
  } else {
    let countDown = countdown(n-1);
    countDown.unshift(n);
    return countDown;
  }
}

console.log(countdown(10))