import random
weights = {
  'winning': 1,
  'break-even': 2,
  'losing': 3,
}

def weighted_lottery(weights):
    container_list = []

    for (name, weight) in weights.items():
      for _ in range(weight):
        container_list.append(name)
    return random.choice(container_list)    




print(weighted_lottery(weights))
