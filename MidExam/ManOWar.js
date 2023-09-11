function manOWar(arr) {

    let piratShip = arr.shift().split(">").map(Number);
    let warship = arr.shift().split(">").map(Number);

    let index = 0
    let maxHealth = arr[index];
    index++;
    let command = arr[index];
    index++;

    let piratsWon = false;
    let piratesLost = false;

    while (command !== "Retire") {
        command = command.split(" ");
        let damage = 0

        switch (command[0]) {
            case "Fire":

                let indexAttack = Number(command[1]);
                damage = Number(command[2]);
                if (indexAttack >= 0 && indexAttack < warship.length) {
                    warship[indexAttack] -= damage;
                    if (warship[indexAttack] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        piratsWon = true;
                        break;
                    }
                }
                break;
            case "Defend":

                let startIndex = Number(command[1])
                let endIndex = Number(command[2])
                damage = Number(command[3])
                if (startIndex >= 0 && endIndex < piratShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        piratShip[i] = piratShip[i] - damage;
                        if (piratShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            piratesLost = true;
                            break;
                        }
                    }
                }
                break;
            case "Repair":
                let indexRepair = Number(command[1]);
                let health = Number(command[2]);
                if (indexRepair >= 0 && indexRepair < piratShip.length) {
                    if (piratShip[indexRepair] + health > maxHealth) {
                        piratShip[indexRepair] = maxHealth;
                    } else {
                        piratShip[indexRepair] += health
                    }
                }
                break;
            case "Status":
                let repairSoon = piratShip.filter(el => el < (maxHealth * 0.2));
                console.log(`${repairSoon.length} sections need repair.`);
                break;
        }


        if (piratsWon) {
            break;
        }

        if (piratesLost) {
            break;
        }

        command = arr[index];
        index++;
    }

    if (command === "Retire") {
        let pirateShipSum = piratShip.reduce((a, b) => a + b)
        let warshipSum = warship.reduce((a, b) => a + b)
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);

    }

}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])