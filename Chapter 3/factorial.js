// 阶乘函数，最基本的递归

function factorial(num) {
  if (num === 1) {
    // 基线条件，必须要 return 不然就不会出栈
    return 1
  } else {
    // 递归条件，做了压栈操作
    return num * factorial(num - 1)
  }
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
