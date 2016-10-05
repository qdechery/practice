import numpy as np

my_list1 = [1,2,3,4]
my_list2 = [11,22,33,44]

my_array1 = np.array(my_list1)

my_lists = [my_list1, my_list2]

my_array2 = np.array(my_lists)

print my_array2

#check shape of array
print my_array2.shape

#check type of  array - this brings back int32
print my_array2.dtype

#creates an array of 5 zeroes - 0. because they are floats
print np.zeros(5)

my_zeros_array =  np.zeros(5)
#this type brings back float64
print my_zeros_array.dtype

#creates 5 arrays of five 1s - 1. because they are floats
print np.ones([5,5])

#also creates an array of 5 zeroes - 0. like np.zeros
print np.empty(5)

#creates 5 arrays where there is a 1. in the first unit of the first row, 2nd in 2nd row, etc. and all others are zeros 
print np.eye(5)

#arange is powerful - it creates an array from 0 to the integer added as a dependency
print np.arange(5)

#these parameters delimit: start number, end number, and count by number
print np.arange(5,50,2)