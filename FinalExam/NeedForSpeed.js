function needForSpeed(arr) {

    let numOfCars = Number(arr.shift());
    let cars = [];
    let index = 0;
  
    for (let i = 0; i < numOfCars; i++) {
      let [car, mileage, fuel] = arr[i].split("|");
  
      let obj = {
        car: car,
        mileage: Number(mileage),
        fuel: Number(fuel)
      }
      cars.push(obj);
      index++;
    }
  
    let line = arr[index];
    index++
  
    while (line !== "Stop") {
      let tokens = line.split(" : ");
      let action = tokens[0];
      let car = tokens[1];
      let fuel;
      let distance;
      let found = cars.find(c => c.car === car);
  
      switch (action) {
        case "Drive":
          distance = Number(tokens[2]);
          fuel = Number(tokens[3]);
  
          if (found.fuel < fuel) {
            console.log("Not enough fuel to make that ride");
          } else {
            found["mileage"] += distance;
            found["fuel"] -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
          }
  
          if (found["mileage"] >= 100000) {
            console.log(`Time to sell the ${car}!`);
            let indexOfCar = cars.indexOf(found);
            cars.splice(indexOfCar, 1);
          }
  
          break;
        case "Refuel":
          fuel = Number(tokens[2]);
          found.fuel += fuel;
  
          if (found.fuel > 75) {
            fuel = 75 - (found.fuel - fuel);
            found.fuel = 75;
          }
          console.log(`${car} refueled with ${fuel} liters`);
          break;
        case "Revert":
          distance = Number(tokens[2]);
          found["mileage"] -= distance;
  
          if (found["mileage"] < 10000) {
            found["mileage"] = 10000;
          } else {
            console.log(`${car} mileage decreased by ${distance} kilometers`);
          }
  
          break;
      }
  
      line = arr[index];
      index++
    }
  
    for (let el of cars) {
      let {car, mileage, fuel} = el
      console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
  
  }
  needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])