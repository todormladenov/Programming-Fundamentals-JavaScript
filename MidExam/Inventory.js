function inventory(arr) {

    let inventory = arr.shift().split(", ");

    let index = 0;
    let command = arr[index];
    index++;

    while (command !== "Craft!") {
        let tokens = command.split(" - ")
        let item = tokens[1];

        switch (tokens[0]) {
            case "Collect":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case "Combine Items":
                let items = item.split(":");
                let oldItem = items[0];
                let newItem = items[1];
                if (inventory.includes(oldItem)) {
                    inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (inventory.includes(item)) {
                    let currItem = inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(currItem);
                }
                break;
        }

        command = arr[index];
        index++;
    }

    console.log(inventory.join(", "));

}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])