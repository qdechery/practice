import numpy as np 

arr = np.arange(11)
print arr

print np.sqrt(arr)
#exponential
print np.exp(arr)

#random random number distribution
A = np.random.randn(10)
print A

B = np.random.randn(10)
print B
print 'binary function:'
#binary functions
print np.add(A,B)
print np.maximum(A,B)
print np.minimum(A,B)

website = 'http://docs.scipy.org/doc/numpy/reference/ufuncs.html#available-ufuncs'
import webbrowser
webbrowser.open(website)