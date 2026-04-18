
let arr = [1, 2, 3];
// insert value from right side 
arr.push("one");
arr.push("two");
arr.push("three");
arr.push("four");
// remove value from right side 
arr.pop();
// insert value from left side
arr.shift()
// insert value from left side
arr.unshift("")
// index value  insertion other values which is not used are considerd as empty
arr[20] = "hi";
console.log(arr);

//===============================================================
let firstArr = [];
for (let i = 0; i < 5; i++) {
  let element = prompt("enter any thing");
  firstArr[i] = element;
  console.log(firstArr);
}
// ===============================================================
// find max number 
let arr = [20, 25, 43, 76, 90, 100]
let maxNum = "";
for (let i = 0; i < arr.length; i++) {
  if (maxNum < arr[i]) {
    maxNum = arr[i];
  }

}
console.log(maxNum);
//===================================================================
// second max element 
let arr = [32, 51, 63, 4, 35, 66, 17, 89];
let firstMax = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (firstMax < arr[i]) {
    secondMax = firstMax;
    firstMax = arr[i];
  } else if (arr[i] > secondMax && arr[i] < firstMax) {
    secondMax = arr[i];
  }
  console.log(firstMax, secondMax);

}
//======================================================================
// sum of Array element
 let sumArray = [0,2,5,7,1,2,8,9,]
  let sum = 0;
  for (let i = 0; i < sumArray.length; i++) {sum += sumArray[i];}
console.log(sum);

// another approch 
let total = sumArray.reduce((prev, next) => prev + next, 0); // without this {} return is implmented
console.log(total.toFixed(2))

//============================================================
// reverse array with extra space
let myArr = [10,20,30,40,50,60,70];
let tempArr = new Array(myArr.length);
let j = 0;
for(let i = myArr.length -1; i>=0; i-- ){
    tempArr[j] = myArr[i];
    j++ ;

}
console.log(tempArr);
//=======================================================
//without any extra space (two pointer technique)
let myArr = [10, 20, 30, 40, 50, 60, 70];
let i = 0;
let j = myArr.length - 1;
while (i < j) {
  let temp = myArr[i];
  myArr[i] = myArr[j];
  myArr[j] = temp;
  i++;
  j--;
}
console.log(myArr)   
//=======================================================
// shift all 1 to left side

//=======================================================
// shift all 1 to right  side
//=======================================================
// shift each element to left side

//=======================================================
// shift each element to right side

//=======================================================
// shift each element to right / left side by k times == arr(i+k) % length

//=======================================================
// shift each element to right / left  side by block- reversal method

//leetcode problem 26 remove duplicates from sorted arrays  without taking extra space


//