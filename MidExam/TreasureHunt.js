function treasureHunt(arr) {

    let treasureChest = arr.shift().split("|");

    let index = 0;
    let command = arr[index];
    index++;

    function loot(inventory, treasureChest) {
        for (let i = 1; i < inventory.length; i++) {
            if (!treasureChest.includes(inventory[i])) {
                treasureChest.unshift(inventory[i]);
            }
        }
    }

    while (command !== "Yohoho!") {
        command = command.split(" ")

        switch (command[0]) {
            case "Loot":
                loot(command, treasureChest);
                break;
            case "Drop":
                let indexOfItem = Number(command[1]);
                if (indexOfItem >= 0 && indexOfItem < treasureChest.length) {
                    let currItem = treasureChest.splice(indexOfItem, 1);
                    treasureChest.push(currItem[0]);
                }
                break;
            case "Steal":
                let stealCount = Number(command[1]);
                if (treasureChest.length < stealCount) {
                    stealCount = treasureChest.length
                }
                let startIndex = treasureChest.length - stealCount;
                let stolenItems = treasureChest.splice(startIndex, stealCount)
                console.log(stolenItems.join(", "));
                break;
        }
        command = arr[index];
        index++;
    }



    if (treasureChest.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        let treasureItemsLength = treasureChest.map(el => el.length);
        let treasureItemsLengthSum = treasureItemsLength.reduce((a, b) => a + b);
        let averageTreasureGain = treasureItemsLengthSum / treasureChest.length;
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }


}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])