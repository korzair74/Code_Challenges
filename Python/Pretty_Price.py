def pretty_price(price, dec):
  price = int(price)
  
  if isinstance(dec, int):
    cost = round(price + (dec / 100), 2)
    return cost
  else:
    cost = price + dec


print(pretty_price(2, 69))    