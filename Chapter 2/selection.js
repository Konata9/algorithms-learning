var step = 0

function getMin(arr) {
  var min = arr[0]
  var minIndex = 0

  // 数组的循环，从 n --> 1 次
  arr.forEach((item, index) => {
    step++
    if (item < min) {
      min = item
      minIndex = index
    }
  })

  return {
    min,
    minIndex
  }
}

function selection(arr) {
  var res = []

  // 循环数组的长度是动态变化的
  while (arr.length > 0) {
    step++
    var { min, minIndex } = getMin(arr)
    res.push(min)
    arr.splice(minIndex, 1)
  }

  return res
}

var arr = []
for (var i = 0; i < 30; i++) {
  arr.push(Math.ceil(Math.random() * 20))
}

console.log(`before: ${arr}`)
console.log(`after: ${selection(arr)}`)
console.log(`steps: ${step}`)
// 10 个数 step 65
// 15 个数 step 135
// 30 个数 step 495
// 确实和 O(n * n * 1/2) 接近