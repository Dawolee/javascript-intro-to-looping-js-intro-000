function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr = "I am ${i+1} strange loop${i === 0 ? '' : 's'}.";
  }
}
