# make a list to hold onto our items
shopping_list = []

# print out instructions
print("What should we pick up at the store?")
print("Enter 'DONE' to stop adding items.")

while True:
	# ask for new items
	new_item = input(">> ")

	# add new items to our list
	shopping_list.append(new_item)

	# be able to quit the app
	if new_item == 'DONE':
		shopping_list.remove('DONE')
		break

# print out the list
print("Here's your list:")

for item in shopping_list:
	print(item)