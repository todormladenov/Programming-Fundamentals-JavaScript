function blackFlag(arr) {

    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let total = 0;

    for (let i = 1; i <= days; i++) {

        if (i % 3 === 0) {
            total += dailyPlunder * 1.50;
        } else {
            total += dailyPlunder;
        }

        if (i % 5 === 0) {
            total -= total * 0.3;
        }
    }

    if (total >= expectedPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (total / expectedPlunder) * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["10",
"20",
"380"])