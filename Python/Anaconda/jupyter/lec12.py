# %matplotlib inline
import numpy as np 
import matplotlib
import matplotlib.pyplot as plt 

points = np.arange(-5,5,0.01)

dx,dy = np.meshgrid(points,points)
# print dx
# print dy

z = (np.sin(dx) + np.sin(dy))
print z

plt.imshow(z)
