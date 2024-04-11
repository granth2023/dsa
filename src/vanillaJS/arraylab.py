# Exercise 1: Define an empty list named foods
foods = []

# Exercise 2: Add 'pizza' & 'cheeseburger' to the foods list

foods += ['pizza', 'cheeseburger']
foods += ['pizza', ' cheeseburger']
print (foods)

# Exercise 3: Add 'taco' to the foods list so that 'taco' is the first item
foods.insert(0, 'taco')
foods.insert(0, 'taco')
print (foods)
# Exercise 4: Access 'pizza' in the foods list and assign to a variable named favFood

favFood = foods[1]
favoFood = foods[1]
print(favFood)
# Exercise 5: Insert 'tofu' in the foods list between 'pizza' & 'cheeseburger'
foods.insert(foods.index('cheeseburger'), 'tofu')
foods.insert(foods.index('cheeseburger'), 'tofu')
print(foods)

# Exercise 6: Replace 'pizza' in the foods list with 'sushi' & 'cupcake'
pizza_index = foods.index('pizza')
pizza_index = foods.index('pizza')
foods[pizza_index:pizza_index + 1] = ['sushi', 'cupcake']
foods[pizza_index:pizza_index + 1] = ['sushi', 'cupcake']

print(foods)

# Exercise 7: Use slice to create a new list containing 'sushi' & 'cupcake', assign to yummy
yummy = foods [foods.index('sushi'): foods.index('tofu')]

print(yummy)
# Exercise 8: Using indexOf, find the index of 'tofu' and assign to a variable named soyIdx
soyIdx = foods.indexOf['tofu']
print (soyIdx)
# Exercise 9: Join all items in foods into a single string, assign to allFoods
allFoods = ' -> '.join
print(allFoods)
# Exercise 10: Check if 'soup' is in the foods list, assign result (True/False) to hasSoup
hasSoup = 'soup' in foods
# Exercise 11: Iterate through nums list, add each odd number to a new list named odds
nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
odds = [ num for num in nums if num % 2 != 0]
print(odds)

# Exercise 12: Iterate through nums, add numbers to fizz, buzz, or fizzbuzz list based on divisibility
fizz = []
buzz = []
fizzbuzz = []
for num in nums:
    if num % 3==0 and num % 5 == 0:
        fizzbuzz.append(num)
    elif num % 3 == 0:
        fizz.append (num)
    elif num % 5 == 0:
        buzz.append(num)
    print (fizzbuzz, buzz, fizz)

# Exercise 13: Assign the last nested list from numArrays to a variable named numList

numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
]

numList = numArrays[-1]

# Exercise 14: Access the number 66 in numArrays and assign to a variable named num

nums = numArrays[2][1]
# Exercise 15: Sum up all numbers in numArrays, assign total to a variable named total
total = sum(sum(numArray)for numArray in numArrays)
print(total)