// 快速排序
function quickSort(arr) {
  // 选 base 的时候，不要一直以第一个为准
  var base = Math.floor(Math.random() * arr.length)
  var baseNum = arr[base]
  var leftArr = []
  var rightArr = []

  // 基准条件，只有一个元素的数组是不需要排序的
  if (arr.length <= 1) {
    // 需要考虑到左右可能有空数组的情况
    return arr
  } else {
    // O(n * logn)
    // for 循环是第一个 n
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] <= baseNum && i !== base) {
        // 把基准值要剔除
        leftArr.push(arr[i])
      } else if (arr[i] > baseNum) {
        rightArr.push(arr[i])
      }
    }

    // 数组被分成了两份，平均长度是对半减少的，所以是 logn
    // 如果一边永远是空，最坏情况下，这里还是 n ===> 最坏情况下 O(n^2)
    return quickSort(leftArr).concat([baseNum]).concat(quickSort(rightArr))
  }
}

var arr = []
for (var i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 40))
}

console.log(`before: ${arr}`)
console.log(`after: ${quickSort(arr)}`)