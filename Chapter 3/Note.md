# 递归（爆栈警告）

- 递归是可以用来代替循环的，代码上会更加优雅也更容易爆栈
- 基线条件和递归条件
  - 基线条件（base case）：结束递归的条件，设定不好就会爆栈。
  - 递归条件（recursive case）：继续递归的条件
- 栈（stack）：先进后出。叠盘子的例子
  - 内存消耗大。空时间换时间的手段
  - 尾递归（高级知识） V8 支持尾递归的
  