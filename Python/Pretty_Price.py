def pretty_price(price, dec):
  if isinstance(dec, int):
    cost = price + (dec / 100)
  else:
    cost =price + dec
  if isinstance(price, float):
    return price
  else:
    return(cost)

print(pretty_price(2, .49))    