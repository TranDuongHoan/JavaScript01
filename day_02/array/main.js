// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

console.log(arr);
console.log(number);
console.log(myArr);

console.log(myArr[3]);
myArr[3] = 40;
console.log(myArr);

// Method: Thêm xóa phần tử
// pop(), push(), shift(), unshift(), splice()
myArr.pop();
console.log(myArr);

myArr.push("Trần Văn B");
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.unshift("nguyễn");
console.log(myArr);

//splice(begin, delete_count,....elements)
myArr.splice(2, 2);
console.log(myArr);

myArr.splice(3,0,200,300);
console.log(myArr);

//includes(): kiểm tra 1 phần tử có trong array hay không?
console.log(myArr.includes(200));
console.log(myArr.includes(500));

//sort
let points = [40, 100, 1, 5, 6];
console.log(points.sort((a, b)=> (a-b)));

// //split - join
// let text = "Xin chào các bạn";
// let words = text.split(" ");
// console.log(words);

// console.log(words.join("-"));

// Khai báo mảng số
let numbers = [1, 2, 3, 4, 5, 6];

// 1. Duyệt qua mảng số và in ra giá trị của mảng
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Tính tổng các giá trị trong mảng
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum);

// 3. Tính tổng các giá trị lẻ của mảng
let sumOdd = 0;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        sumOdd += numbers[i]
    }
}
console.log(sumOdd);


 // In ra các phần tử của mảng ( e = numbers[i])
 // numbers.forEach(v, i) => {
 //     console.log(v);
 // }


//LAB 1:
// //bài 1:
function max(str){
    let max = arr[0];
    for (let i = 1; i < numbers.length; i++){
        if (max < arr[i]){
        max = arr[i];
        }
    }
    return max; 
}

//bài 2:
// let min = a[0];
// for (let i = 1; i < numbers.length; i++){
//     if (min > a[i]){
//         min = a[i];
//     }
//     return min;
// }

//bài 3:
let result = [];
for (let i = 0; i < numbers.length; i++){
    result.push(arr[i] % 2);
}

//bài 4:
function repeatString(str) {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(str);
    }
    return result.join("");
  }  
  console.log(repeatString('a'));

//bài 5:
function repeatString(str) {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(str);
    }
    return result.join("-");
  }  
  console.log(repeatString('a'));

  //bài 6:
  function isSymmetricString(str){
    let str1 = str.toLowerCase().split(" ").join("")
    let reverseString = str1.split("").reverse().join("")
    return str1 == reverseString
 }

 //bài 7:
 const findMinnumber = number =>{
    let arr = number.toString().split(" ").sort();
    if(arr[0] == '0'){
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] != '0'){
                arr[0] = arr[i];
                arr[i] = '0';
                break;
            }            
        }
    }    
    return Number(arr.join(""));
 }
 

 
    




















