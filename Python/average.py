# def average(num_list):
#   mean = sum(num_list) / len(num_list)
#   return mean

# print(average([1, 2, 5, 75, 12, 43]))


from functools import reduce

def average(num_list):
  total = reduce(lambda a,b : a+b,num_list) / len(num_list)
  return total
  
print(average([1, 2, 5, 75, 12, 43]))

