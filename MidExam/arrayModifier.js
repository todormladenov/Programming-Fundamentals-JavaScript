function arrayModifier(arr) {

    let arrOfNums = arr.shift();
    arrOfNums = arrOfNums.split(' ').map(Number);


    let multiply = (a, b) => a * b;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        while (!command.includes("end")) {
            let [operation, firstI, secondI] = command.split(" ")
            firstI = Number(firstI)
            secondI = Number(secondI)
            if (operation === "swap") {
                let firstElement = arrOfNums[firstI];
                let nextElement = arrOfNums[secondI];
                arrOfNums[firstI] = nextElement;
                arrOfNums[secondI] = firstElement;
                break;
            } else if (operation === "multiply") {
                let firstElement = Number(arrOfNums[firstI]);
                let nextElement = Number(arrOfNums[secondI]);
                arrOfNums[firstI] = multiply(firstElement, nextElement);
                break;
            } else {
                for (let i = 0; i < arrOfNums.length; i++) {
                    arrOfNums[i] -= 1;
                }
                break;
            }
        }
    }


    console.log(arrOfNums.join(", "));


}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])