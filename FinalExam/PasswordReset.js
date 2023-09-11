function passwordReset(arr) {

    let password = arr.shift();
    let isFalse = false;


    let comandParser = {
        "TakeOdd": ((password) => {

            password = password.split("")
                .filter((ch, index) => index % 2 !== 0)
                .join("");

            return password;
        }),

        "Cut": ((password, index, length) => {

            let substring = password.substring(index, length + index);
            password = password.replace(substring, "");

            return password
        }),

        "Substitute": ((password, substring, replacement) => {

            if (password.includes(substring)) {

                while (password.includes(substring)) {

                    password = password.replace(substring, replacement);

                }

            } else {
                console.log("Nothing to replace!");
                isFalse = true;
            }

            return password;
        }),
    }

    for (let line of arr) {

        if (line === "Done") {
            break;
        }

        let tokens = line.split(" ");
        let action = tokens[0];

        switch (action) {
            case "TakeOdd":
                password = comandParser[action](password);
                console.log(password);
                break;

            case "Cut":
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);
                password = comandParser[action](password, index, length);
                console.log(password);
                break;

            case "Substitute":
                let substring = tokens[1];
                let replacement = tokens[2];
                password = comandParser[action](password, substring, replacement);
                if (isFalse) {
                    break;
                    isFalse = false;
                }
                console.log(password);
                break;
        }

    }

    console.log(`Your password is: ${password}`);

}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])