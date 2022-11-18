// Write a function that accepts 2 numbers and returns -1 if the first one is smaller
// than the second, 1 if it is vice versa, and 0 if they are equal.
// function compare(a,b){
//     if(a>b){
//         return 1;
//     }
//     else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// console.log(compare(3,4));

// Write a function that counts the factorial of a given number. 
// function factorial(num){
//     let fact = 1;
//     for(let i=1; i<=num;i++){
//         fact*=i;
//     }
//     return fact;
// }
// console.log(factorial(5));

// Write a function that accepts three separate digits and makes them a number.
// For example, 1, 4, and 9 will become 149.
// function digits(a,b,c){
//     console.log(a+b+c);
// }
// let a = prompt('enter a');
// let b = prompt('enter b');
// let c = prompt('enter c');
// digits(a,b,c)
// OR
// function digits(a,b,c){
//     a= a.toString();
//     b=b.toString();
//     c=c.toString();
//     console.log(a+b+c);
// }

// digits(1,3,4)

// Write a function that accepts the width and length of a rectangle and calculates
// its area. If there is only one parameter given, it counts as a square. 
// function area(width,height){
//     height==undefined ? height = width: height=height;
//     return width*height;
// }
// console.log(area(3));

// Write a function that checks if the given number is perfect. A perfect number
// is a number equal to the sum of all its divisors. For example, the smallest perfect
// number is 6, which is the sum of 1, 2, and 3.
// function perfectNum(num){
//     let sum=0

//     for(let i =0 ;i<=num; i++){
//         if(num%i==0){
//            sum+=i;
//         }
//         if(sum==num){
//             console.log('given num is a perfect num');
//         }
//     }
// }
// perfectNum(28);


// Write a function that accepts the min and max values of a range, and only puts out
// the perfect numbers within that range. Use the previous function to check, if numbers
// are perfect. 
// function perfectNumbersInRange(min, max) {
  
//     for (let i = min; i <= max; i++) {
//         if (perfectNum(i)) {
//             console.log(i);
//         }
//     }

// }

// Write a function that accepts time (hours, minutes, seconds) and returns a string in
// the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
// function time(h,m,s){
//     h = h.toString();
//     m = m.toString();
//     s==undefined ? s="00": s=s.toString();
//     return h+":"+m+":"+s;
// }
// console.log(time(21,53));

// Write a function that accepts hours, minutes, and seconds and returns that time only
// in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// function returnSeconds(hour, min, sec){
//     return hour*60*60+min*60+sec;
// }
// console.log(returnSeconds(1,25,43));

// Write a function that accepts the number of seconds, translates it into hours,
// minutes, and seconds, and returns as a hh:mm:ss string.
// function time(seconds){
//     let hour = Math.floor(seconds/3600);
//     let min = Math.floor((seconds-(hour*3600))/60);

//     let sec = seconds-(hour*3600)-(min*60);
  
//     return hour+":"+min+":"+sec;
// }
// console.log(time(4321));

// Write a function that counts the difference between the dates. The function accepts
// 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this
// problem use the functions from the two previous ones: at first, make the dates in
// seconds, count the difference in seconds, and translate it back into hh:mm:ss.
// function diffDate(h1,m1,s1,h2,m2,s2){
//     let d1 = returnSeconds(h1,m1,s1);
//     let d2 = returnSeconds(h2,m2,s2);
//     let diff;
//     if(d1>=d2){
//          diff = d1-d2;
//     }else diff = d2-d1;
//     return time(diff);
// }
// console.log(diffDate(3,20,56,1,32,51));