var arr = []

for (var i = 1; i < 101; i++) {
  arr.push(i)
}

function binary_search(arr, target) {
  console.log(`search target: ${target}`)

  var step = 0
  var low = 0
  var heigh = arr.length - 1

  while (low <= heigh) {
    console.log(`range: ${arr[low]} --- ${arr[heigh]}`)
    // 下标的取值范围
    var mid = Math.floor((low + heigh) / 2)
    console.log(`current mid: ${mid}`)

    if (arr[mid] === target) {
      step++
      console.log(`Finish total step: ${step}`)
      return target
    } else if (arr[mid] > target) {
      // height 和 low 的加减需要注意 T T
      heigh = mid - 1
      step++
    } else if (arr[mid] < target) {
      low = mid + 1
      step++
    }
  }
}

binary_search(arr, 7)
binary_search(arr, 18)
binary_search(arr, 2)
binary_search(arr, 75)
binary_search(arr, 99)