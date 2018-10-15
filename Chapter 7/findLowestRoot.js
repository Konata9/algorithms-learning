// 狄克斯特拉算法练习
// - 求起点到终点的最短路径
// - 起点-> A cost 6
// - 起点-> B cost 2
// - A -> 终点 cost 1
// - A -> B cost 3
// - B -> 终点 cost 5

// 初始化数据
var rootMap = new Map()

var start = [
  { name: 'A', cost: 6 },
  { name: 'B', cost: 2 }
]

var A = [
  { name: 'dist', cost: 1 },
]

var B = [
  { name: 'A', cost: 3 },
  { name: 'dist', cost: 5 }
]

var dist = []

rootMap.set('start', start)
rootMap.set('A', A)
rootMap.set('B', B)
rootMap.set('dist', dist)

// 检测节点是否被检查过
var checkedArr = []

// 储存 cost 对象
var costObj = {
  'A': 6,
  'B': 2,
  'dist': Infinity
}

var resObj = {
  'A': 6,
  'B': 2,
  'dist': Infinity
}

// 储存 parent 对象
var parentObj = {
  'A': 'start',
  'B': 'start',
  'dist': null
}

function getLowestNode() {
  var min = Infinity
  var node = null
  for (var key in costObj) {
    if (costObj[key] < min && !checkedArr.includes(key)) {
      min = costObj[key]
      node = key
    }
  }

  return node
}

// 找到最便宜的节点
var lowestNode = getLowestNode()

while (lowestNode) {
  console.log(`lowestNode: ${lowestNode}`)
  // 先获取保存在结果中的 cost
  var cost = resObj[lowestNode]
  // 找到这个节点的相邻节点
  var neighbourNodes = rootMap.get(lowestNode)
  neighbourNodes.forEach(node => {
    console.log(node)
    var newCost = cost + node.cost
    if (newCost < resObj[node.name]) {
      // 当更新后的开销小于之前的开销，则更新掉之前的开销和父节点
      resObj[node.name] = newCost
      parentObj[node.name] = lowestNode
    }
    checkedArr.push(lowestNode)
  })
  lowestNode = getLowestNode()
}

console.dir(resObj)
console.dir(parentObj)

// 这个算法的条件
// 1. 需要有所有边的权重
// 2. 所有点的相邻点要知道
// 3. 要知道起点以及起点的相邻点的开销
// 4. 每个节点的父节点要知道