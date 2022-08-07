function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
  // if (!elem1) {
  //     return elem1
  // }
  // return elem2
}

console.log(filterOutFalsy(true, "Dog"));

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 3, 41, 2, 4]));

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([1, 3, 41, 2, 42, 23]));

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([1, 3, 41, 2, 42, -23]));

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
    console.log(i);
  }
  return sum;
}

console.log("sum = " + progressiveSum(600));

function calctime(time) {
  let second = time % 60;
  let minute = Math.floor(time / 60);
  if (minute.toString().length === 1) {
    minute = "0" + minute;
  }
  console.log(second);
  if (second === 0) {
    second = "00";
  }
  return minute + ":" + second;
}

console.log(calctime(360));

function getMax(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(getMax([100, 5, 23, -43]));

function reverseString(str) {
  let reverse = "";
  // for (let i = 0; i < str.length; ++i) {
  //   reverse = str[i] + reverse;
  // }
  // return reverse;

  // for (i = str.length - 1; i >= 0; --i) {
  //   reverse = reverse + str[i];
  // }
  // return reverse;

  return str.split("").reverse().join("");
}

console.log(reverseString("This is cool"));

function convertToZeros(arr) {
  // for (let i = 0; i < arr.length; ++i) {
  //   arr[i] = 0;
  // }
  // return arr;

  // return new Array(arr.length).fill(0);

  return arr.map((element) => (element = 0));
}

console.log(convertToZeros([5, 100, 1, 43, "g"]));

function removeApples(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; ++i) {
  //   if (arr[i] != "Apple") {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;

  return arr.filter((elem) => elem !== "Apple");
}

console.log(removeApples(["Apple", "Orange", "Pineapple"]));

//Q11. Filter out all the falsy value
function filterOutFalsy2(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; ++i) {
  //   if (!!arr[i]) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr

  return arr.filter((elem) => !!elem);
}

console.log(filterOutFalsy2([0, "Apple", [], false, ""]));

// Q12. Truthy to true, Falsy to false
function convertToBoolean(arr) {
  return arr.map(elem => !!elem)

  // for (let i = 0; i < arr.length; ++i) {
  //   if (!!arr[i]) {
  //     arr[i] = true;
  //   } else {
  //     arr[i] = false;
  //   }
  // }
  // return arr
}

console.log(convertToBoolean([500, 0, "David"]));
