// console.log("Hello world");
// // alert("Hello world")

// // Khai báo biến và không gán giá trị cho biến
// // let age;
// // console.log(age);
// // age = 35;
// // console.log(age);

// // Khai báo biến và gán giá trị cho biến
// let email = "hien@techmaster.vn"
// // console.log(typeof email);

// const Pi = 3.14;
// console.log(Pi);

// // Java: int, short, byte, long, double, float, char, Boolean
// // Javascript: Number, string, boolean, null, undefined, symbol

// let number = 10;
// console.log(typeof number); // "number"

// // let name = "$usd";
// // console.log(typeof name); // "string"

// // Toán tử

// console.log(1 + '1');
// console.log(3 * '3');
// console.log('9' / '3');
// console.log('4' * 4);
// console.log(10 / email);
// console.log(10 / 0);

// //ES6 - Template String

// let name = "Bùi Hiên"
// let year = 1997

// console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`);
// console.log("Xin chào các bạn, mình tên là" + " " + name + ". Năm nay" + " " + (2022-year) +" "+ "tuổi");

// //Function
// //Cách 1: Regular Function
// function sum(a, b){
//     return a + b;
// }
// console.log (sum(3,4));

// //Cách 2: Function Expression
// const sum1 = function(a, b){
//     return a + b;
// }
// console.log(sum1(10,20));

// //Cách 3: Arrow Function (ES6) || Default Parameter (ES6)
// const sum2 = (a = 10, b = 20) => {
//     let firstName = "John";
//     console.log(firstName);
//     console.log(a);
//     console.log(b);
//     console.log("--");
//     return a + b;
// }
// // const sum2 = (a, b) => a + b; 
// // ( trường hợp đặc biệt, có return duy nhất, có thể lược bỏ dấu ngoặc và chữ return)
// console.log(sum1(90,20));
// console.log(sum1(90));
// console.log(sum1());

//bài 1:
// if (mark >= 85) {
//     console.log("A");
// } else if (70 <= mark && mark < 85) {
//     console.log("B");
// } else if (40 <= mark && mark <70){
//     console.log("C");
// } else {
//     console.log("D");
// }

// //bài 2:
// function sosanh2so(a, b){
//     if(a > b){
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }
// //bài 3:
// function kiemTraSo(num) {
//     if (num < 0) {
//       console.log("Số âm");
//     } else if (num > 0) {
//       console.log("Số dương");
//     } else {
//       console.log("Số 0");
//     }
//   } 
 
// //bài 4:
// function sochanle(num){
//     if (num % 2 == 0){
//         console.log("Số chẵn");
//     } else{
//         console.log("Số lẻ");
//     }
// }

// //bài 5:
// function kiemTraChiaHet(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log("Số chia hết cho cả 3 và 5");
//     } else {
//       console.log("Số không chia hết cho cả 3 và 5");
//     }
// }
// //bài 6:
// function kiemTraTong(a, b, c) {
//     if (c === a + b) {
//       console.log("c bằng a + b");
//     } else {
//       console.log("c không bằng a + b");
//     }
//   }
  

// //Swich - case
// //bài 1:
// let day = 0
// switch (day) {
//     case 1: {
//         console.log("hôm nay thứ 2");
//         break;
//     }
//     case 2: {
//         console.log("hôm nay thứ 3");
//         break;
//     }
//     case 3: {
//         console.log("hôm nay thứ 4");
//         break;
//     }
//     case 4: {
//         console.log("hôm nay thứ 5");
//         break;
//     }
//     case 5: {
//         console.log("hôm nay thứ 6");
//         break;
//     }
//     case 6: {
//         console.log("hôm nay thứ 7");
//         break;
//     }
//     case 0: {
//         console.log("hôm nay chủ nhật");
//         break;
//     }
//     default: {
//         console.log("Không vào thứ nào");
//         break;
//     }
// }

// //bài 2:
// let month = 9
// switch (month) {
//     case 1,2,3: {
//         console.log("mùa xuân");
//         break;
//     }
//     case 4,5,6: {
//         console.log("mùa hạ");
//         break;
//     }
//     case 7,8,9: {
//         console.log("mùa thu");
//         break;
//     }
//     case 10,11,12: {
//         console.log("mùa đông");
//         break;
//     }
//     default: {
//         console.log("Không vào mùa nào");
//         break;
//     }
// }

//Vòng lặp 
//bài 1:
console.log( 'a'.repeat(10))

//bài 2:
function repeatString(str) {
    return Array(n).fill(str).join('-');
  }
  
// ví dụ:
console.log(repeatString("a", 10)); 

//bài 3:
function repeatString(str, n) {
    return Array(n).fill(str).join('-');
  }
  
// ví dụ:
console.log(repeatString("a", 5));

//bài 4:
function chiahetcho5(num){
    for (let num = 0; 0 < num < 100; num++) {
        if(num % 5 == 0){
          
        }            
        
    }
}
