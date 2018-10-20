// 广播电台覆盖问题，贪心算法求解
// 背景，每个广播公司都覆盖一些地区，找出最少的组合使得覆盖的地区最大

// 集合1 与 集合2 的差集
function setDiff(set1, set2) {
  var arr1 = Array.from(set1)
  var arr2 = Array.from(set2)

  return new Set(arr1.filter(item => {
    return !arr2.includes(item)
  }))
}

// 两个集合的交集
function setJoin(set1, set2) {
  var arr1 = Array.from(set1)
  var arr2 = Array.from(set2)

  return new Set(arr1.filter(item => {
    return arr2.includes(item)
  }))
}

// 所有地区集合
var area = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

// 广播公司列表以及所覆盖的区域
var boardCasts = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az'])
}

// 剩余未覆盖的地区 用于做基准条件
var remainArea = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])
// 已覆盖的地区
var coveredArea = new Set()

var result = new Set()

while (remainArea.size > 0) {
  // 在 boardCasts 中找出覆盖剩余最多最多的地区（不考虑重复）直到全部覆盖 area
  var biggestBoardcast = null
  var maxCoverableArea = new Set()

  for (var key in boardCasts) {
    // remainArea 与 boardCasts[key] 的交集就是 boardCasts[key] 能覆盖的区域数
    var coverableArea = setJoin(remainArea, boardCasts[key])
    if (coverableArea.size > maxCoverableArea.size) {
      biggestBoardcast = key
      maxCoverableArea = boardCasts[key]
    }
  }

  console.log('----- maxCoverableArea -----')
  console.dir(maxCoverableArea)
  Array.from(maxCoverableArea).forEach(area => {
    coveredArea.add(area)
  })
  result.add(biggestBoardcast)

  console.log('----- coveredArea -----')
  console.dir(coveredArea)

  // 更新 remainArea， 去掉已经覆盖的地区， 与 coverdArea 求差集
  remainArea = setDiff(remainArea, coveredArea)
  console.log('----- remainArea -----')
  console.log(remainArea)
}

console.dir(result)
