function numbers(nums) {

    let arrOfNums = nums.split(' ').map(Number);
  
    let averageNumber = arrOfNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    averageNumber = averageNumber / arrOfNums.length;
    
    let biggerNumbers = [];
    let isTrue = false;
  
    for (let i = 0; i < arrOfNums.length; i++) {
      if (arrOfNums[i] > averageNumber) {
        biggerNumbers.push(arrOfNums[i])
        isTrue = true;
      }
    }
  
    biggerNumbers.sort((a, b) => b - a);
    let newArr = biggerNumbers.slice(0, 5);
   
  
    if (isTrue) {
      console.log(newArr.join(" "));;
    } else {
      console.log("No");
    }
    
     
   
    
  
  }
  numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')