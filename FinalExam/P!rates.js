function pirates(arr) {

    let targets = [];

    for (let line of arr) {

        if (line.includes("Sail")) {
            break;
        }

        let [town, population, gold] = line.split("||");
        let found = targets.find(t => t.town === town);
        let obj = {};

        if (!found) {

            obj = {
                town: town,
                population: +population,
                gold: +gold
            }
            targets.push(obj)
        } else {

            found.population += +population;
            found.gold += +gold;

        }
    }

    let index = arr.indexOf("Sail");
    let command = arr[index + 1];
    index++;

    while (command !== "End") {
        let tokens = command.split("=>")
        let town;
        let gold;

        if (command.includes("Plunder")) {
            town = tokens[1];
            let populationToRemove = Number(tokens[2])
            gold = Number(tokens[3]);

            let found = targets.find(t => t.town === town);

            if (found) {
                found.population -= populationToRemove;
                found.gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${populationToRemove} citizens killed.`);

                if (found.gold <= 0 || found.population <= 0) {
                    let indexOfTown = targets.indexOf(found)
                    targets.splice(indexOfTown, 1)
                    console.log(`${town} has been wiped off the map!`);
                }
            }

        } else if (command.includes("Prosper")) {

            town = tokens[1];
            goldToAdd = Number(tokens[2]);

            if (goldToAdd <= 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                let found = targets.find(t => t.town === town);
                found.gold += goldToAdd;
                console.log(`${goldToAdd} gold added to the city treasury. ${town} now has ${found.gold} gold.`);
            }
        }

        command = arr[index + 1];
        index++;
    }

    if (targets.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${targets.length} wealthy settlements to go to:`);
        for (let target of targets) {
            let { town, population, gold } = target
            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    }

}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])