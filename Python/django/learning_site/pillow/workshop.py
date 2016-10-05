from PIL import Image
from PIL import ImageEnhance, ImageFilter

balloons = Image.open('balloons.jpg')
ribbons = Image.open('ribbons.jpg')

box = (22, 324, 826, 846)

ribbons.filter(ImageFilter.EMBOSS).show()

"""balloons_enhancer = ImageEnhance.Color(balloons)
balloons_enhancer.enhance(.5).show()
"""