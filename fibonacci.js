function fibo2(num) {
  if (num === 0) {
    return [0];
  }
  let initial = [0, 1];
  for (let i = 2; i <= num; i++) {
    let element = initial[i - 1] + initial[i - 2];
    if (num >= element) {
      initial.push(element);
    } else {
      return initial;
    }
  }
}

console.log(fibo2(75));
