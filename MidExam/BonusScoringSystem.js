function bonusScoringSystem(input) {

    let students = Number(input[0]);
    let lectures = Number(input[1]);
    let additionalBonus = Number(input[2]);
    let maxBonus = 0;
    let studentAttendances = 0;


    for (let i = 3; i < input.length; i++) {
        let currStudnetAttendance = Number(input[i]);

        let currbonus = (currStudnetAttendance / lectures) * (5 + additionalBonus);

        if (currbonus > maxBonus) {
            maxBonus = currbonus;
            studentAttendances = currStudnetAttendance;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);

}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])