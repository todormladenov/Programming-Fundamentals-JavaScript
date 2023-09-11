function shoppingList(arr) {

    let shoppingList = arr.shift().split("!");

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let item = command[1]

        if (command.includes("Go Shopping!")) {
            break;
        }

        if (command.includes("Urgent")) {

            if (shoppingList.includes(item)) {
                continue;
            } else {
                shoppingList.unshift(item);
            }

        } else if (command.includes("Unnecessary")) {

            if (!shoppingList.includes(item)) {
                continue;
            } else {
                let indexOfItem = shoppingList.indexOf(item);
                shoppingList.splice(indexOfItem, 1);
            }

        } else if (command.includes("Correct")) {

            if (!shoppingList.includes(item)) {
                continue;
            } else {
                let indexOfItem = shoppingList.indexOf(item);
                let newItem = command[2];
                shoppingList.splice(indexOfItem, 1, newItem);
            }

        } else if (command.includes("Rearrange")) {

            if (!shoppingList.includes(item)) {
                continue;
            } else {
                let indexOfItem = shoppingList.indexOf(item);
                shoppingList.splice(indexOfItem, 1);
                shoppingList.push(item);
            }

        }
    }

    console.log(shoppingList.join(", "));



}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
