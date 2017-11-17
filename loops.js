function forLoop(arr) {
  for (var i = 0; i <= 25; i++) {
    if (i === 0) {
      arr[i] = "I am 1 strange loop.";
    }
    else {
      arr[i] = "I am ${i+1} strange loops.";
    }
  }
}
