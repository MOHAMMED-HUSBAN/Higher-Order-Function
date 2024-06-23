// let arr = [1, 2, 3];
// arr.forEach(function (element) {
//   console.log(Math.pow(2, element));
// });
// let num = arr.map(function (number) {
//   return Math.pow(2, number);
// });
// console.log(num);
// let arr2 = [];
// function forr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let a = Math.pow(2, arr[i]);
//     arr2.push(a);
//   }
//   console.log(arr2);
// }
// forr(arr);

//////EX2///////////////////////////////////
// let arr = [1, 2, "a"];
// let a = arr.map(function (value) {
//   if (!isNaN(value)) {
//     if (value % 2 == 0) {
//       return "Event";
//     } else {
//       return "odd";
//     }
//   } else {
//     return "Not a number";
//   }
// });
// console.log(a);
//////EX3///////////////////////////////////
// let arr = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// let a = [];
// arr.forEach(function (value) {
//   a.push(value);
// });
// console.log(a);
//////EX4///////////////////////////////////
let arr = [15, 3, 5, 11];
let a = arr.map(function (value) {
  if (value % 3 == 0 && value % 5 == 0) {
    return "FuzzBuzz";
  } else if (value % 3 == 0) {
    return "Fizz";
  } else if (value % 5 == 0) {
    return "Buzz";
  } else {
    return value;
  }
});
console.log(a);
