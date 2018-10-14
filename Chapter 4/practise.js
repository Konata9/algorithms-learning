// 递归练习--递归求和
function recurSum(arr) {
  if (arr.length === 1) {
    // 分解为最简单的情况，即只有一个元素的数组
    return arr[0]
  } else {
    // 减小数组长度，直到符合基线条件
    return arr.shift() + recurSum(arr)
  }
}

var arr = [1, 2, 3, 4]
console.log(recurSum(arr))

// 递归计算数组长度
function recurLength(arr) {
  var item = arr.pop()
  // 最简单情况，没有元素，pop 返回 undefined
  if (!item) {
    return 0
  } else {
    return 1 + recurLength(arr)
  }
}

var arr2 = [1, 2, 3, 4, 5, 6, 7]
console.log(recurLength(arr2))

// 递归寻找最大数
function recurGetMax(arr) {
  // 最简单情况，只有两个数的数组比大小
  if (arr.length === 2) {
    return arr[0] >= arr[1] ? arr[0] : arr[1]
  } else {
    // 只取前两个数比大小，剔除小的那个，缩小数组范围
    arr[0] >= arr[1] ? arr.splice(1, 1) : arr.splice(0, 1)
    return recurGetMax(arr)
  }
}

var arr3 = [2, 5, 11, 66, 0, -5, 3, -7, 47, 25]
console.log(recurGetMax(arr3))

// 二分查找递归版，把target 位置换一下，可以少两个参数
function recurBinary(arr, low = 0, heigh = arr.length - 1, target) {
  var mid = Math.floor((low + heigh) / 2)
  console.log(`current: ${arr[mid]}`)
  // 如果 arr[mid] === target 就直接跳出
  if (arr[mid] === target) {
    return arr[mid]
  } else if (arr[mid] > target) {
    // 中间值大于 targegt 切掉数组后面部分
    arr.splice(mid, arr.length - mid)
    return recurBinary(arr, 0, arr.length, target)
  } else if (arr[mid] < target) {
    // 中间值小于 target 切掉数组前面部分
    arr.splice(0, mid + 1)
    return recurBinary(arr, 0, arr.length, target)
  } else {
    // target 不在数组中的情况
    return `Target: ${target} not found.`
  }
}

var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(recurBinary(arr4, 0, arr4.length, 10))