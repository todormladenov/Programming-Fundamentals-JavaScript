function plantDiscovery(arr) {

    let plants = {};
    let plantsRate = {};
    let plantsFound = arr.shift();
  
    for (let i = 0; i < plantsFound; i++) {
      let [plant, rarity] = arr.shift().split("<->");
      if (!plants.hasOwnProperty(plant)) {
        plants[plant] = (Number(rarity));
        plantsRate[plant] = [];
      }
    }
  
    for (let line of arr) {
  
      if (line.includes("Rate")) {
        let tokens = line.split(" ");
        let plant = tokens[1];
        let rating = Number(tokens[3])
  
        if (plants.hasOwnProperty(plant)) {
          plantsRate[plant].push(rating);
        } else {
          console.log(`error`);
        }
  
      } else if (line.includes("Update")) {
        let tokens = line.split(" ");
        let plant = tokens[1];
        let newRarity = Number(tokens[3])
  
        if (plants.hasOwnProperty(plant)) {
          plants[plant] = Number(newRarity);
        } else {
          console.log(`error`);
        }
  
      } else if (line.includes("Reset")) {
        let [comand, plant] = line.split(" ");
  
        if (plants.hasOwnProperty(plant)) {
          plantsRate[plant].splice(0, plantsRate[plant].length);
        } else {
          console.log(`error`);
        }
  
      } else if (line.includes("Exhibition")) {
        console.log(`Plants for the exhibition:`);
      }
    }
  
    for (let [key, value] of Object.entries(plants)) {
      console.log(`- ${key}; Rarity: ${value}; Rating: ${averageRating(plantsRate[key])}`);
    }
  
    function averageRating(array) {
  
      let totalRate = 0
  
      if (array.length === 0) {
        return totalRate.toFixed(2)
      }
  
      for (let rate of array) {
        totalRate += rate
      }
  
      let averageRate = totalRate / array.length
  
      return averageRate.toFixed(2)
    }
  
  }
  plantDiscovery((["3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"]))