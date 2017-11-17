function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      arr.push("I am 1 strange loop.");
    }
    else {
      arr.push("I am ${i+1} strange loops.");
    }
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  if (n === 0) {
    return "done";
  }
}
