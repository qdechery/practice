import numpy as np 

arr = np.arange(0,11)

print arr

#prints 8 (0-scale)
print arr[8]

#prints items 1 through 5 (0-scale)
print arr[1:5]
print arr[0:5]

arr[0:5] = 100

print arr

arr = np.arange(0,11)

print arr

slice_of_arr = arr[0:6]
#0,1,2,3,4,5
print slice_of_arr

slice_of_arr[:] = 99
#99,99,99,99,99
print slice_of_arr

#because we didnt copy the array, the original arr is all sliced up and changed
print arr

arr_copy = arr.copy()
#avoid the slice problem by explicitly copying
print arr_copy

arr_2d = np.array(([5,10,15],[20,25,30], [35,40,45]))

print arr_2d

#gives back first row (0-scale)
print arr_2d[1]

#gives back first row and 0th unit (in that order)
print arr_2d[1,0]
#same thing as above
print arr_2d[1][0]

#gives everything up to 2 for rows, and then everything from 1 and beyond in columns
print arr_2d[:2,1:]

arr2d = np.zeros((10,10))
print arr2d

arr_length = arr2d.shape[1]
#gives 10 as the length
print arr_length

#sets all the values in the 10 by 10 array to 1.
for i in range(arr_length):
	arr2d[i]=1
print arr2d

# counts up in the array
for i in range(arr_length):
	arr2d[i]=i
print arr2d

#fancy index: prints the 2nd, 4th, 6th, and 8ht rows
print arr2d[[2,4,6,8]]

#fancy indexing can go in any order
print arr2d[[6,5,2,7]]

