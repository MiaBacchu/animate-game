


// const numbers = [222,222,5545,34,23,44,65,22,64,734,554,8,3,5,1,24,26,227,9,222];

// // console.log(Math.max.apply(null, numbers));
// setInterval(function(){
//     document.getElementById('demo').innerHTML=new Date().toTimeString().slice(0,9);
// },1000);

// Object.prototype.doingFun = function hello () {
// console.log('this is hello');
// }

// console.dir(window)
// console.log('hello' + undefined);
// var hello = function myFunc(){
//     console.log('this is my function');
// };

// class Car {
//     constructor(name,year) {
//         this.name = name;
//         this.year = year;
//     };
//     run(){
//         return(
//             `${this.name} is running`
//         )
//     }
// }

// const toyota = new Car('toyota',2020);
// const bmw = new Car('bmw',2010);
// console.log(bmw.run());

// 1 //lower to upper sort
// const sort=(array)=>{
//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = 0; j < array.length-1; j++) {
//             if (array[j]>array[j+1]) {
//                 [array[j],array[j+1]]=[array[j+1],array[j]];
//             }     
//         } 
//     }
//     return array;
// }
// console.log(sort(numbers))

// 3 //upper to lower sort
// const numbers=[5545,34,23,44,65,22,64,734,554,2,3,5,1,24,23,23,2];

// const sort=(array)=>{
//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = 0; j < array.length-1; j++) {
//             if (array[j]<array[j+1]) {
//                 [array[j],array[j+1]]=[array[j+1],array[j]];
//             }     
//         } 
//     }
//     return array;
// }
// console.log(sort(numbers));

// 4 // odd number generator
// const oddNumber=(array)=>{
//     const oddArray=[]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2===1) {
//            oddArray.push(array[i])
//         }    
//     }
//     return oddArray;
// }
// console.log(oddNumber(numbers))

// 5 // even number generator
// const evenNumber=(array)=>{
//     const evenArray=[]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2===0) {
//            evenArray.push(array[i])
//         }    
//     }
//     return evenArray;
// }
// console.log(evenNumber(numbers))

// 6 //binary search

// const binarySearch=(array,target)=>{

//     let end = array.length;
//     let mid = Math.floor(array.length/2);

//     for (let i = 0; i < array.length; i++) {
//         if (array[mid]===target) {
//             return mid;
//         }
//         if (array[mid]>target) {
//             end = mid;
//             mid = Math.floor(mid/2);
//         }
//         else{
//             mid = Math.ceil((end+mid)/2);
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(numbers,222));

// 7 //general search

// const generalSearch=(array,target)=>{
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===target) {
//             return i;
//         }   
//     }
//     return -1;
// }
// console.log(generalSearch(numbers,1));

//// 8 remainder

// function remainder(x, y) {
// 	if (x<y) {
//         return x;
//     }
//     else{
//         return(x%y)
//     }
// }

// console.log(remainder(1, 3))

// console.log(remainder(3, 4))

// console.log(remainder(-9, 45))

// console.log(remainder(5, 5))

//// 9 print ludu 1 to 6

// function ludu (min,max) {
//     return (
//         Math.floor(Math.random()*(max-min+1))+min
//     );
// }
// console.log(ludu(1,6));

////// indexOf return only first index of the value

// numbers.forEach((value,index)=>console.log(numbers.indexOf(value),value,index));
// let x = 9.656;
// console.log(x.toExponential());
// console.log(numbers.keys())

////// create a for loop

// const forLoop=(i)=>{
//     if (i<numbers.length) {
//         console.log(numbers[i]);
//         i++;
//         increaseCall(i)
//     }
//     else{
//         return;
//     }
// }
// const increaseCall=(i)=>{ 
//         forLoop(i);
// }

// forLoop(i=0);