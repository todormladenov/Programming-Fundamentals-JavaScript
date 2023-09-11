function thelift(input) {

    let maxCapacity = 4;
    let peopleWaiting = Number(input.shift())
    let liftState = input.shift().split(' ').map(Number);
    let totalWagons = liftState.length;
    let totalSeatsTaken = 0;
  
    for (let i = 0; i < totalWagons; i++) {
      while (liftState[i] < maxCapacity && peopleWaiting > 0) {
        liftState[i]++;
        peopleWaiting--;
      }
      totalSeatsTaken += liftState[i];
    }
  
    if (peopleWaiting === 0 && totalSeatsTaken !== peopleWaiting){
      console.log("The lift has empty spots!");
      console.log(liftState.join(" "));
    } else if (peopleWaiting > 0) {
      console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
      console.log(liftState.join(" "));
    } else {
      console.log(liftState.join(" "));
    }
  
    
  
    
  }
  thelift([
    "15",
    "0 0 0 0 0"
   ])