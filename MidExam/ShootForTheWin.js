function shootForTheWin(arr) {

  let targets = arr.shift().split(" ").map(Number);

  let index = 0;
  let command = arr[index];
  index++;
  let counter = 0;

  function reduceOrIncrease(arrOfTargers, indexOfTarget, value) {
    for (let i = 0; i < arrOfTargers.length; i++) {
      if (arrOfTargers[i] > 0 && indexOfTarget !== i && arrOfTargers[i] > value) {
        arrOfTargers[i] -= value
      } else if (arrOfTargers[i] > 0 && indexOfTarget !== i && arrOfTargers[i] <= value) {
        arrOfTargers[i] += value
      }
    }
  }


  while (command !== "End") {
    let indexTargetShot = Number(command);
    let value = targets[indexTargetShot]

    if (indexTargetShot < 0 || indexTargetShot >= targets.length) {
      command = arr[index];
      index++;
      continue;
    } else {
      targets[indexTargetShot] = -1;
      counter++;
    }

    reduceOrIncrease(targets, indexTargetShot, value)

    command = arr[index];
    index++;
  }

  console.log(`Shot targets: ${counter} -> ${targets.join(" ")}`);



}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])