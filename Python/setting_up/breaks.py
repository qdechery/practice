def loopy(items):
    # Code goes here
    for item in items:
      if items.index(item) == 0:
        continue
      print(item)

items = ["grape", "apples"]
print(items)