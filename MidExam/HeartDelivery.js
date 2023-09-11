function heartDelivery(arr) {

    let neighborhood = arr.shift().split("@");
  
    let index = 0;
    let command = arr[index];
    index++;
    let cupidJumpsIndex = 0;
    let lastCupidPosition = 0;
    let isVisited = [];
  
    while (command !== "Love!") {
      command = command.split(" ");
      let jumpLength = Number(command[1]);
      cupidJumpsIndex += jumpLength;
  
      if (cupidJumpsIndex >= neighborhood.length) {
        cupidJumpsIndex = 0;
      }
  
      if (isVisited.includes(cupidJumpsIndex) && neighborhood[cupidJumpsIndex] === 0) {
        console.log(`Place ${cupidJumpsIndex} already had Valentine's day.`);
        lastCupidPosition = cupidJumpsIndex;
        command = arr[index];
        index++;
        continue;
      }
  
      neighborhood[cupidJumpsIndex] -= 2;
  
      if (neighborhood[cupidJumpsIndex] === 0 && !isVisited.includes(cupidJumpsIndex)) {
        isVisited.push(cupidJumpsIndex);
        console.log(`Place ${cupidJumpsIndex} has Valentine's day.`);
      }
  
      lastCupidPosition = cupidJumpsIndex;
      command = arr[index];
      index++;
  
    }
  
    if (isVisited.length === neighborhood.length) {
      console.log(`Cupid's last position was ${lastCupidPosition}.`);
      console.log("Mission was successful.");
    } else {
      console.log(`Cupid's last position was ${lastCupidPosition}.`);
      let failedPlaces = neighborhood.length - isVisited.length
      console.log(`Cupid has failed ${failedPlaces} places.`);
    }
  
  
  }
  heartDelivery(["2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!"])