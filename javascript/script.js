// const sumOfDigits = (ele) => {
//     return String(ele)
//       .split('')
//       .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
//   };
  
//   // Example usage
//   const input = 8383;
//   const result = sumOfDigits(input);
  
//   console.log(`The sum of the digits of ${input} is: ${result}`);


// const sun=(ele)=>{
//     return String(ele)
//     .split("").reduce((sum,digit)=>sum+parseInt(digit,10),0)
// }
// const input=prompt("enter the num")
// const res=sun(input)
// console.log(res)



// const numb=prompt('enter the number')
// if(numb%2===0){
// console.log("even number")
// }
// else{
//     console.log("odd number")
// }

// const prime =(n)=>{
//     for(let i=2; i<n; i++){
//         if(n%i===0){
//             return("this is not a prime number")
//         }
//         else{
//             return("this is prime number")
//         }
//     }
// }
// const res=prime(11)
// console.log(res)



////Function to find the Nth term of the series
// const findNthTerm = (N) => {
//     if (N < 0) {
//       return 'Error';
//     } else {
//       return N * N;
//     }
//   };
  
//   // Example usage
//   const input = prompt("enter the value")
//   const result = findNthTerm(input);
  
//   console.log(`The ${input}th term of the series is: ${result}`);
  


// const number=33
// const res=number * number;
// console.log (res)



  // Function to find the smaller number
// const findSmallerNumber = (num1, num2) => {
//     return Math.min(num1, num2);
//   };
  
//   // Example usage
//   const input1 = 23;
//   const input2 = 1;
//   const result = findSmallerNumber(input1, input2);
  
//   console.log(`The smaller number is: ${result}`);
  
////another method

// let num1=203
// let num2=235
// let res=Math.min(num1,num2);
// console.log(res)



// const myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation (e.g., fetching data from a server)
//     const success = 24; // Simulating success for demonstration purposes
  
//     setTimeout(() => {
//       if (success>220) {
//         resolve("Operation succeeded!");
//       } else {
//         reject("Operation failed!");
//       }
//     }, 1000); // Simulating a delay of 1 second
//   });
  
//   myPromise
//     .then((result) => {
//       console.log("Fulfilled:", result);
//     })
//     .catch((error) => {
//       console.error("Rejected:", error);
//     });
  


// // Function to calculate the circumference
// const calculateCircumference = (radius) => {
//     if (radius < 0) {
//       return 'Error';
//     } else {
//       const circumference = 2 * Math.PI * radius;
//       // Round to 2 decimal places
//       return circumference.toFixed(2);
//     }
//   };
  
//   // Example usage
//   const radius = 2;
//   const result = calculateCircumference(radius);
  
//   console.log(`The circumference of the circle is: ${result}`);



//   const num=2
//   const res= 2*Math.PI * num;
//   const res1=res.toFixed(2)
//   console.log(res1)
  


// const triagel= 20
// const area=(Math.sqrt(3)/4) * Math.pow(triagel,2)
// const area1=area.toFixed(2)
// console.log(area1)

// Function to find the days in a month
// const findDaysInMonth = (month) => {
//     // Validating input range
//     if (month < 1 || month > 12) {
//       return 'Error';
//     }
  
//     // Array to store the number of days in each month
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
//     return daysInMonth[month - 1]; // Adjusting for 0-based indexing
//   };
  
//   // Example usage
//   const inputMonth = 2;
//   const result = findDaysInMonth(inputMonth);
  
//   if (result === 'Error') {
//     console.log('Error: Invalid input range');
//   } else {
//     console.log(`Number of days in month ${inputMonth}: ${result}`);
//   }



///////month finding///////
// const months=(user)=>{
// if(user>12){
//     return "error"
// }
// const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// return daysInMonth[user]
// }
// const data=2
// const res=months(data-1)
//   console.log(`your month days ${res}`)


///////simple interset//////
// const prin=1000;
// const rate=2;
// const time=5
// const res=(prin * rate * time)/100;
// console.log(res)

// const simpleInt=(prin,rate,time)=>{

//    const value=  (prin*rate*time)/100;

// return value.toFixed(2)
// }

// const res=simpleInt(1001,2,5)
// console.log(res)

/////max value////

// const maxfun=(num1,num2,num3)=>{

//     return Math.max(num1,num2,num3)
// }

// const res=maxfun(33,22,44)
// console.log(res)

///////power squre//////
// const myfun=(num)=>{

//     return Math.pow(num,3)
// }
// const arr=prompt("enter squre num")
// const res=myfun(arr)
// console.log(res)



////////leap year/////

// const myyear=(num)=>{
// if(num %4===0){
//     return "Y this is leap year"
// }else{
//     return " N this not leap year " 
// }
// }
// const res=myyear(2021)
// console.log(res)



/////length/////


// const sering="iam happy"
// const res=sering.replace(/\s/g, '')
// console.log(res.length)



///Write a code to get an integer N and print the sum of  values from 1 to N.///

// const myfun=(N)=>{
// return (N*(N+1))/2;
// }
// const res=myfun(13)
// console.log(res)

//////Given base(B) and height(H) of a triangle find its area////
// const trangele=(len,brth)=>{
//     return 0.5*len*brth
// }
// const res=trangele(2,4)
// console.log(res)



