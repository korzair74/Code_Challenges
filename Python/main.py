import random

weighted_lottery = [
  {
    "Win": 1,
    "Break-even": 2,
    "Lose": 3,
  }
]
print(random.choices(weighted_lottery, weights= weighted_lottery  ))