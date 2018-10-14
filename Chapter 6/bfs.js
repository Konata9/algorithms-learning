// 广度优先搜索练习
// 在自己的关系网中找出可能的芒果商人
// 1. 先找自己的朋友（1级关系）
// 2. 找自己的朋友的朋友（2级关系）
// 数据结构： map  key（人名） -- value（关系网）

// 初始化数据
var relationMap = new Map()
var me = [
  { name: 'alice', seller: false },
  { name: 'bob', seller: false },
  { name: 'cat', seller: false }
]

var alice = [
  { name: 'bob', seller: false },
  { name: 'dan', seller: true },
  { name: 'meggie', seller: false }
]

var bob = [
  { name: 'cat', seller: false },
  { name: 'peggy', seller: true }
]

var cat = [
  { name: 'bob', seller: false }
]

relationMap.set('me', me)
relationMap.set('alice', alice)
relationMap.set('bob', bob)
relationMap.set('cat', cat)


function searchSeller(name) {
  // 首先获取 'me' 的信息
  var searchedList = []
  var seller = []

  var peopleList = relationMap.get(name)

  while (peopleList.length > 0) {
    // console.log(peopleList)
    // console.log('==========')
    var person = peopleList.shift()
    if (person && !searchedList.includes(person.name)) {
      // 对于检查过的对象就不做检查了
      if (person.seller) {
        // 是 seller 就放到结果数组
        seller.push(person)
      }
      searchedList.push(person.name)
      var friendRelation = relationMap.get(person.name)
      if (friendRelation) {
        peopleList = peopleList.concat(friendRelation)
      }
    }
  }

  return seller
}

console.log(searchSeller('me'))
