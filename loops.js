

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  if (n === 0) {
    return "done";
  }
}

function doWhileLoop(arr) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do (arr.length - 1) {
    while (maybeTrue() && arr.length > 0)
  }
}
