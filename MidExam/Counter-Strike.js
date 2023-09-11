function counterStrike(input) {

  let index = 0;
  let energy = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let wonBattlesCount = 0;
  let isLost = true;

  while (command !== "End of battle") {
    let distance = Number(command);

    if (distance <= energy) {
      energy -= distance;
      wonBattlesCount++;
    } else {
      console.log(`Not enough energy! Game ends with ${wonBattlesCount} won battles and ${energy} energy`);
      isLost = false;
      break;
    }

    if (wonBattlesCount % 3 === 0) {
      energy += wonBattlesCount;
    }


    command = input[index];
    index++;

  }

  if (isLost) {
    console.log(`Won battles: ${wonBattlesCount}. Energy left: ${energy}`);
  }


}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]))