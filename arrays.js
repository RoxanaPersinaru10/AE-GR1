const arr=[1,2,3,4,5];
console.log(arr);


// arr.push(6);
// console.log(arr);

// const popValues=arr.pop();
// console.log(popValues);
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(e1=>{console.log(e1);})

// arr.map(e1=>{console.log(e1);})

for(e1 of arr){
    console.log(e1);
}

for(e1 in arr){
    console.log(e1);
}
