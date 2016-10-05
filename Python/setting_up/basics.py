import random

start = 5

def even_odd(num):
  
	num = random.randint(1, 99)
  
	while start > 0:
	    if num % 2 == 0:
	    	print("{} is even".format(num))
	    else:
	    	print("{} is odd".format(num))

  	start -= 1