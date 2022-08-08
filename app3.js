// Q1. Show rating
function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    // if (i === 3) {
    //   ratings = ratings + "*";
    // } else {
    //   rating = ratings + "* ";
    // }

    ratings = ratings + "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(5.5));

// Q2. Sort by lowest to highest price
function sortLowtoHigh(arr) {
  return arr.sort((a, b) => a - b);
  //   return arr.sort((a, b) => b - a); for high to low
}

console.log(sortLowtoHigh([5, 3, 7, 12, 42342]));

// Q3. Sort by highest to lowest price
function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// Q4. Promises

// Q5. Find all the posts by a single user

async function postsByUser(userID) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts"); //backend

  const data = await res.json(); //convert to json so Java/Frontend can read
  console.log(data);

  const posts = data.filter((elem) => elem.userId === userID);
  console.log(posts);
}

postsByUser(4);

// Q6. First 6 Incomplete Todos
async function firstSixIncomplete() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();
  console.log(data);

  const incomplete = data.filter((elem) => !elem.completed).slice(0, 6);
  console.log(incomplete);
}

firstSixIncomplete();
