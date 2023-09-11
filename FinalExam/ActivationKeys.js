function activationKey(arr) {

    let key = arr.shift();

    let operationsExecute = {
        "Contains": (key, substring) => {

            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }

            return key

        },
        "Flip": (key, startIndex, endIndex, UpperOrLower) => {

            let substring = key.substring(startIndex, endIndex);

            if (UpperOrLower === "Upper") {
                substring = substring.toUpperCase();
            } else {
                substring = substring.toLowerCase();
            }

            return key = key.replace(key.substring(startIndex, endIndex), substring);

        },
        "Slice": (key, startIndex, endIndex) => {

            let stringToDelete = key.substring(startIndex, endIndex);
            key = key.replace(stringToDelete, "");

            return key;

        }
    }

    for (let line of arr) {

        let tokens = line.split(">>>");
        let action = tokens[0];
        let startIndex;
        let endIndex;

        if (action === "Generate") {
            console.log(`Your activation key is: ${key}`);
            break;
        }

        switch (action) {
            case "Contains":

                let substring = tokens[1]
                key = operationsExecute[action](key, substring)

                break;

            case "Flip":

                let UpperOrLower = tokens[1];
                startIndex = Number(tokens[2]);
                endIndex = Number(tokens[3]);

                key = operationsExecute[action](key, startIndex, endIndex, UpperOrLower);
                console.log(key);

                break;

            case "Slice":

                startIndex = Number(tokens[1]);
                endIndex = Number(tokens[2]);

                key = operationsExecute[action](key, startIndex, endIndex);
                console.log(key);

                break;
        }
    }



}
activationKey(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])