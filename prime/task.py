import math
import time
def is_prime(num):
    if(num<=1):
        return False
    for i in range(2,int(math.sqrt(float(num)))):
        if num % i ==0:
            return False
    return True


def task(tab1,tab2):
    tab3 = []
    for i in range(0,len(tab1)):
        p = 0
        for j in range(0,len(tab2)):
            if tab1[i] == tab2[j]:
                p+=1
        if not is_prime(p):
            tab3.append(tab1[i])
    return tab3

start_time= time.time()
print(task([2,3,9,2,5,1,3,7,10],[2,1,3,4,3,10,6,6,1,7,10,10,10]))
end_time = time.time()
print("--- seconds ---",(end_time-start_time))