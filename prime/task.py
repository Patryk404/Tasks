import time
import math
def is_prime(num): # Time Complexity: O(sqrt(n))
  if num<= 1:
      return False
  for i in range(2,int(math.sqrt(num))+1):
    if (num%i) == 0:
      return False
  return True

def task(tab1,tab2): # Time Complexity: O(n+m)
    freq = {} 
    tab3 = []
    for num in tab2:
        freq[num] = freq.get(num,0) +1
    for num in tab1:
        if not is_prime(freq.get(num,0)):
            tab3.append(num) 
    return tab3

start_time= time.time()
print(task([2,3,9,2,5,1,3,7,10],[2,1,3,4,3,10,6,6,1,7,10,10,10]))
end_time = time.time()
print(f"Execution Time: {end_time-start_time}")