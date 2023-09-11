function muOnline(input) {

  let health = 100;
  let bitcoin = 0;
  let roomCounter = 0;
  let arr = input.split("|");
  
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    let amount = Number(command[1]);

    if (command.includes("potion")) {
      roomCounter++;
      health += amount;
      if (health > 100) {
        console.log(`You healed for ${100 - (health - amount)} hp.`);
        health = 100;
        console.log(`Current health: ${health} hp.`);
      } else {
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (command.includes("chest")) {
      roomCounter++;
      bitcoin += amount;
      console.log(`You found ${amount} bitcoins.`);
    } else {
      roomCounter++;
      let monster = command[0];
      let attack = amount;

      health -= attack;
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${roomCounter}`);
        break;
      }
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
  }

 
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")