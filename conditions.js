console.log("Hello world!");
const age = 21;
const name = "Bold";

if (age < 18) {
  console.log("under age");
} else if (age === 21 && name === "Bold") {
  console.log("can drink alcohol");
} else if (age > 60) {
  console.log("undur nastan");
} else {
  console.log("nothingworks");
}
// 1st
// const number = prompt("enter a number");
// console.log("Fizz");
// if (number % 3 == 0) {
//   console.log("Fizz");
// } else if (givenumber % 5 == 0) {
//   console.log("Buzz");
// }
// if (number % 3 == 0 || number % 5 == 0) {
//   console.log("buzz and Fizz");
// // // }
// // // if (number % 3 != 0 || number % 5 != 0) {
// // //   console.log("Not Buzz and Fizz");
// // }
// // // Write a JavaScript conditional statement to find the largest of five numbers.
// // check input numbers are the type of number, if not console.log('Invalid inputs)

// // Sample numbers : -5, -2, -6, 0, -1  cabed
// // Output : 0
// const a = -5;
// const b = -2;
// const c = -6;
// const d = 0;
// const e = -1;
// if (a > b && a > c && a > d && a > e) {
//   console.log(a);
// } else if (b > a && b > c && b > d && b > e) {
//   console.log(b);
// } else if (c > a && c > b && c > d && c > e) {
//   console.log(c);
// } else if (d > a && d > b && d > c && d > e) {
//   console.log(d);
// } else if (e > a && e > b && e > c && e > d) {
// //   console.log(e);
// }
// Write a JavaScript program that accept two integers and display the larger.

// check input numbers are the type of number, if not console.log('Invalid inputs)

// Sample numbers : 2,5
// Output : 5
const s = 2.5;
const f = 5;
if (typeof s == "number" && s > f) {
  console.log(s);
} else if (typeof f == "number" && f > s) {
  console.log(f);
}
// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -
let q = 3;
let w = -7;
let r = 2;
if (q < w && q < r) {
  console.log(q);
} else if (w < q && w < r) {
  console.log(w);
} else if (r < w && r < q) {
  console.log(r);
}
// / Exercise 5
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
let x = 5;
let y = 3;
if (x > y) {
  console.log(true);
} else if ((x = y)) {
//   console.log(false);
// } else if (x !== y) {
//   console.log("not");
// }
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
const A = prompt("enter a number");
const B = prompt("enter a number");
const C = prompt("enter a number");
const D = prompt("enter a number");
const F = prompt("enter a number");
if (A > 90 && A < 100) {
  console.log("A");
} else if (B >= 80 && B < 90) {
  console.log("B");
} else if (C >= 70 && C < 80) {
  console.log("C");
} else if (D >= 70 && D < 80) {
  console.log("D");
} else if (F >= 0 && F < 60) {
  console.log("F");
}
Write If statement that takes string
    if string length is more than 10 print the string  has more than 10 characters
     if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character
let length = 1;

if (length > 10) {
  console.log("10 characters");
} else if (length > 5) {
  console.log("10 characters");
} else if (length < 1) {
  console.log("nothing");
} else if ((length = 1)) {
  console.log("1 characters");
}

 3) Write conditional expressions to satisfy the following safety rules:

 a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

 b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

 c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

Write If statement that takes number checks if the number is odd or even

    if odd return "the number is odd"

    if even return "the number is even"

Exercise 8 j

Write if statement that takes role and return each role with greeting

    if role is 'Employee' return 'Hello'

    if role is 'Director' return 'Greetings'

    if role is '' return 'Please provide role'

    else return 'Hi'

Exercise 8 j

0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,

бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.

Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
