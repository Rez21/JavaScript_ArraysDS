repeatedNumberArr = [];
for(let i = 10;i<100;i++){
    let onesPlaceDigit = i%10;
    let tensPlaceDigit = (i-onesPlaceDigit)/10;
    if(onesPlaceDigit == tensPlaceDigit)
        repeatedNumberArr.push(i);
    
}
console.log(repeatedNumberArr);