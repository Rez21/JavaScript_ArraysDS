let numbers = [];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.forEach(p => console.log(p));
let temp = 0;
for(let j = 0; j<10; j++)
{
    for(let i =0;i<10-j;i++)
    {
        if(numbers[i]<numbers[i+1])
        {
            temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }
    }
}
console.log("second maximum number is : "+numbers[1]+" second min number is "+numbers[numbers.length-2]);

// by array sort method

let sortedArray = numbers.sort();
console.log("Sorted Array: ");
console.log(sortedArray);
console.log("Using sorting\n2nd largest element: " + sortedArray[(sortedArray.length - 2)]
  + "\n2nd smallest element: " + sortedArray[1]);