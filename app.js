function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 5));

function covertHoursIntoSeconds(hours) {
  return hours * 3600;
}

console.log(covertHoursIntoSeconds(2));

function calcPerimeter(a, b) {
  return (a + b) * 2;
}

console.log(calcPerimeter(2, 9));

function calcTriangleArea(base, height) {
  return base * height * 0.5;
}

console.log(calcTriangleArea(3, 2));

function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

console.log(sumGreaterThan100(10, 20));

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(-2));

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(false));

function isNotZero(numnum) {
  return numnum !== 0;
}

console.log(isNotZero(5));

function calcRemainder(num1, num2) {
  return num1 % num2;
}
console.log(calcRemainder(7, 8));

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(-2));

function booleanInterger(num) {
  //   if (num % 2 === 0) {
  //     return 1;
  //   }
  //   return -1;
  // }
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInterger(9));

function isLoggedInAndSubscribed(loggedIn, subscribed){
    return loggedIn === 'LOOGED_IN' || subscribed === 'SUBSCRIBED';
}

console.log(isLoggedInAndSubscribed('LOOGD_IN','SUBSCRIBED'))
