import operator
from functools import reduce
"""
  dynamic_reducer([1, 2, 3], '+') -> 6
  dynamic_reducer([1, 2, 3], '-') -> -4
  dynamic_reducer([1, 2, 3], '*') -> 6
  dynamic_reducer([1, 2, 3], '/') -> 0.16666667
"""


def dynamic_reducer(numbers, ops): 
  ops = {
    '+': ops.add(),
    '-': ops.sub(),
    '*': ops.mul(),
    '/': ops.truediv()
  }
  print(dynamic_reducer(*numbers, )
  # if arg in args2.keys() == "+":
  # print(dynamic_reducer.reduce(operator.add,*arg1))


# dynamic_reducer([5, 4, 6], "+")
