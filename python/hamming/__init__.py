# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(str1, str2):
  str1len = len(str1)
  str2len = len(str2)
  distance = 0

  if str1len != str2len:
    raise ValueError("DNA strands must be of equal length.")
  elif str1 != str2:
    for i in range(str1len):
      if str1[i] != str2[i]:
        distance += 1

  return distance