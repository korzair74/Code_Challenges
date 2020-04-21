

def fizzbuzz(number): 
  numb = 0
  while numb < number:
    numb += 1
    if numb % 3 == 0 and numb % 5 == 0:
      print("FizzBuzz")  
    elif numb % 3 == 0:
      print("Fizz")
    elif numb % 5 == 0:
      print("Buzz")
    else:
      print(numb)


fizzbuzz(100)      
  

  
