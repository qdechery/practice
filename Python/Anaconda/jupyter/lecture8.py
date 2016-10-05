from __future__ import division

import numpy as np

print 5/2
arr1 = np.array([[1,2,3,4], [8,9,10,11]])

#takes first unit of each array and multiplies by the other first unit of the other array
#therefore this gives 1, 4, 9, 16, 64, 81, 100, 121
print arr1*arr1

#negates from each unit in the respective array
print arr1 - arr1

#1/1, 1/2, 1/3, 1/4, 1/8, 1/9, 1/10, 1/11
print 1/arr1

#1^3, 2^3, 3^3, 4^3, etc.
print arr1 ** 3