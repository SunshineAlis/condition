// // console.log("Hello world!");
// // const age = 21;
// // const name = "Bold";

// // if (age < 18) {
// //   console.log("under age");
// // } else if (age === 21 && name === "Bold") {
// //   console.log("can drink alcohol");
// // } else if (age > 60) {
// //   console.log("undur nastan");
// // } else {
// //   console.log("nothingworks");
// // }
// // 1st
// // const number = prompt("enter a number");
// // console.log("Fizz");
// // if (number % 3 == 0) {
// //   console.log("Fizz");
// // } else if (givenumber % 5 == 0) {
// //   console.log("Buzz");
// // }
// // if (number % 3 == 0 || number % 5 == 0) {
// //   console.log("buzz and Fizz");
// // // // }
// // // // if (number % 3 != 0 || number % 5 != 0) {
// // // //   console.log("Not Buzz and Fizz");
// // // }
// // // // Write a JavaScript conditional statement to find the largest of five numbers.
// // // check input numbers are the type of number, if not console.log('Invalid inputs)
// // // Sample numbers : -5, -2, -6, 0, -1  cabed
// // // Output : 0
// // const a = -5;
// // const b = -2;
// // const c = -6;
// // const d = 0;
// // const e = -1;
// // if (a > b && a > c && a > d && a > e) {
// //   console.log(a);
// // } else if (b > a && b > c && b > d && b > e) {
// //   console.log(b);
// // } else if (c > a && c > b && c > d && c > e) {
// //   console.log(c);
// // } else if (d > a && d > b && d > c && d > e) {
// //   console.log(d);
// // } else if (e > a && e > b && e > c && e > d) {
// // //   console.log(e);
// // }
// // Write a JavaScript program that accept two integers and display the larger.

// // check input numbers are the type of number, if not console.log('Invalid inputs)

// // Sample numbers : 2,5
// // Output : 5
// // const s = 2.5;
// // const f = 5;
// // if (typeof s == "number" && s > f) {
// //   console.log(s);
// // } else if (typeof f == "number" && f > s) {
// //   console.log(f);
// // }
// // Exercise 4

// // Write a JavaScript conditional statement to find the sign of product of three numbers.
// // Display an console.log box with the specified sign.

// // Sample numbers : 3, -7, 2
// // Output : The sign is -
// // let q = 3;
// // let w = -7;
// // let r = 2;
// // if (q < w && q < r) {
// //   console.log(q);
// // } else if (w < q && w < r) {
// //   console.log(w);
// // // } else if (r < w && r < q) {
// // //   console.log(r);
// // }
// // / Exercise 5
// // Choose the correct comparison operator to console.log true, when x is greater than y.
// // Choose the correct comparison operator to console.log false, when x is equal to y.
// // Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
// // let x = 5;
// // let y = 3;
// // if (x > y) {
// //   console.log(true);
// // } else if ((x = y)) {
// // //   console.log(false);
// // // } else if (x !== y) {
// // //   console.log("not");
// // // }
// // // The Grade Assigner
// // - Write a if/else statement that:
// //   - takes 1 variable, a number score.
// //   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// // - Call that if/else statement for a few different scores and log the result to make sure it works.
// // const A = prompt("enter a number");
// // const B = prompt("enter a number");
// // const C = prompt("enter a number");
// // const D = prompt("enter a number");
// // const F = prompt("enter a number");
// // if (A > 90 && A < 100) {
// //   console.log("A");
// // } else if (B >= 80 && B < 90) {
// //   console.log("B");
// // } else if (C >= 70 && C < 80) {
// //   console.log("C");
// // } else if (D >= 70 && D < 80) {
// //   console.log("D");
// // } else if (F >= 0 && F < 60) {
// //   console.log("F");
// // }
// // Write If statement that takes string
// //     if string length is more than 10 print the string  has more than 10 characters
// //      if string length is more than 5 return the string has more than 5 characters
// // //       if string length is less than 1 return the string has nothing
// // //       if string length is equal to 1 return the string has 1 character
// // let length = 1;

// // if (length > 10) {
// //   console.log("10 characters");
// // } else if (length > 5) {
// //   console.log("10 characters");
// // } else if (length < 1) {
// //   console.log("nothing");
// // } else if ((length = 1)) {
// //   console.log("1 characters");
// // }
// //  3) Write conditional expressions to satisfy the following safety rules:

// //  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
// let crewstatus=true;
// if(crewstatus=true){console.log("Crew ready");}else if(crewstatus=false||other){console.log("crew not ready");}
// //  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
// let computerStatusCode=400;
// if(computerStatusCode==200){console.log("Please stand by. Computer is rebooting");}
// else if(computerStatusCode==400){console.log("Success! Computer online.");}
// //  c) If shuttle Speed is > 17,500, print "ALERT: Escape velocity reached!" 
// // Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
// let shuttleSpeed = 4000;
// if(shuttleSpeed > 17500){console.log( "ALERT: Escape velocity reached!");} 
// else if(shuttleSpeed< 8000){console.log( "ALERT: Cannot maintain orbit!");}else{console.log("Stable speed");}
// // Write If statement that takes number checks if the number is odd or even
// //     if odd return "the number is odd"
// //     if even return "the number is even"
// let anynumber=1;
// if(anynumber%2==0){
//     console.log("even");
// }else
// {console.log("odd")}
// // Exercise 8 j
// // Write if statement that takes role and return each role with greeting
// //     if role is 'Employee' return 'Hello'
// //     if role is 'Director' return 'Greetings'
// //     if role is '' return 'Please provide role'
// //     else return 'Hi'
// let role='Employee'
// if( role=="Employee"){
//     console.log("Hello");
// }else if(role=="Director"){
//     console.log("Greetings");
// }else if(role==""){
//     console.log("Please provide role");
// }else{console.log("hi");}
// // Exercise 8 j

// // 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,

// // бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.

// // Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
// let price=100000;
// if(price>5000 && price<30000){
//     console.log((price*15)/100+price);
// }else {console.log((price*20)/100+price);}
// 1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let i = 4 > 3; //true //true
//      let iii = 4 < 3; //false //false
//      let ii = 4 >= 3;//false /true
//      let iv = 4 <= 3;//false/ false
//      let v = 4 == 4;//true / true
//      let vi = 4 === 4;//true /true
//      let vii = 4 != 4;//false /false
//      let iix = 4 !== 4;//false /false
//      let ix = 4 != "4";true   /false   -4=4
//      let x = 4 == "4";//true / true  4 =4
//      let xi = 4 === "4";//false /false  type
     let it = 4 > 3; 
     let iii = 4 < 3; 
     let ii = 4 >= 3;
     let iv = 4 <= 3;
     let v = 4 == 4;
     let vi = 4 === 4;
     let vii = 4 != 4;
     let iix = 4 !== 4;
     let ix = 4 != "4";
     let xa = 4 == "4";
     let xi = 4 === "4";
console.log(it,iii,ii,iv,v,vi,vii,iix,ix,xa,xi)
// 2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
     let one = 4 > 3 && 10 < 12;  //true
     let two = 4 > 3 && 10 > 12; // false
     let three = 4 > 3 || 10 < 12; //true
     let four = 4 > 3 || 10 > 12; //true
     let five = !(4 > 3); //false
     let six = !(4 < 3);//true
     let eight = !(4 > 3 && 10 < 12); //false
     let nine = !(4 > 3 && 10 > 12); //true
     let ten = !(4 === "4");//true
     console.log(one,two,three,four,five,six,eight,nine,ten)
    //  1. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
     // Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.
     let year=2023;
     if(year%4==0){
        console.log("undurjil");
    }else{console.log("sondgoi jil")}
    // 2. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
let price=27500;
if(price>5000 && price<30000){
    console.log((price*15)/100+price);
}else {
    console.log((price*20)/100+price);}
// 3. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
//      1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
//      2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//          a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//          b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//          c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//          d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//          e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
let score = 67;

if (score>= 90 && score < 100) {
 console.log("Mash sain");
} else if (score >= 80 && score < 90) {
console.log("sain");
} else if (score >= 70 && score < 80) {
    console.log("Dund");
 } else if (score >= 60 && score < 70) {
    console.log("Hangalttai");
} else if (score >= 0 && score < 60) {
 console.log("Mash muu");}
const Bat='Hangalttai';
    console.log('Bat'+score+Bat)
    // 4. Өгөгдсөн 2 тооны ихийг олох функц бич.
    let ri=10;
    let io=13;
if(io>ri){console.log("io");}
// Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг 
// (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
// let phone=phone.at(0,1)+Number
let phone=("enter phone.at(0,1)+Number"); 
if(phone.at(0,1)+Number){
    console.log('Mobicom');
}else if (phone.at(0,1)+Number){
    console.log('Unitel');}
    (phone.at(0,1)+Number);{
        console.log('G-mobile');}
//6. Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол 
 let gurvaljina=2^2;
let gurvaljinb=3^2
let gurvaljinc=Number^2;
 if(gurvaljina*gurvaljina+gurvaljinb*gurvaljinb==gurvaljinc)(console.log(gurvaljinc))
// 7. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
 let uv=[105,3,81,90];
let sum=uv.filter(uv=>uv>80).reduce((acc,uv)=>acc+uv,0);

    console.log("80-c ih toonuudin niilber:",sum);



