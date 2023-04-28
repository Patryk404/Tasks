

const is_prime = (num)=> {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const task = (tab1,tab2)=>{ 
    const tab3 = []; 
    tab1.map(element1=>{ 
        let p = 0; 
        tab2.map(element2=>{
            if (element1 == element2){ 
                p++;
            }
        });
        if(!is_prime(p)){
            tab3.push(element1);
        }
    }); 
    return tab3;
}
console.time("Execution Time");
console.log(task([2,3,9,2,5,1,3,7,10],[2,1,3,4,3,10,6,6,1,7,10,10,10]));
console.timeEnd("Execution Time"); 