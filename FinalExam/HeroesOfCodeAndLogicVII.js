function heroesOfCodeAndLogic(arr) {

    let numOfHeroes = Number(arr.shift());
    let index = 0;
    let heroes = [];

    for (let i = 0; i < numOfHeroes; i++) {
        let [name, hp, mp] = arr[i].split(" ");

        if (hp > 100) {
            hp = 100;
        }
        if (mp > 200) {
            mp = 200;
        }

        let obj = {
            name: name,
            hp: Number(hp),
            mp: Number(mp)
        }

        heroes.push(obj);

        index++;
    }

    let line = arr[index];
    index++;

    while (line !== "End") {

        let tokens = line.split(" - ");
        let action = tokens[0];
        let name = tokens[1];
        let foundHero = heroes.find(h => h.name === name);

        switch (action) {

            case "CastSpell":
                let mp = Number(tokens[2]);
                let spellName = tokens[3];

                if (foundHero.mp < mp) {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                } else {
                    foundHero.mp = foundHero.mp - mp;
                    console.log(`${name} has successfully cast ${spellName} and now has ${foundHero.mp} MP!`);
                }
                break;

            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                foundHero["hp"] = foundHero["hp"] - damage;

                if (foundHero["hp"] > 0) {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${foundHero["hp"]} HP left!`);
                } else {
                    let indexOfHero = heroes.indexOf(foundHero);
                    heroes.splice(indexOfHero, 1);
                    console.log(`${name} has been killed by ${attacker}!`);
                }
                break;

            case "Recharge":
                let mpAmount = Number(tokens[2]);
                foundHero["mp"] = foundHero["mp"] + mpAmount;

                if (foundHero["mp"] > 200) {
                    mpAmount = 200 - (foundHero["mp"] - mpAmount)
                    foundHero["mp"] = 200;
                }

                console.log(`${name} recharged for ${mpAmount} MP!`);
                break;

            case "Heal":
                let hpAmount = Number(tokens[2]);
                foundHero["hp"] = foundHero["hp"] + hpAmount;

                if (foundHero["hp"] > 100) {
                    hpAmount = 100 - (foundHero["hp"] - hpAmount)
                    foundHero["hp"] = 100;
                }

                console.log(`${name} healed for ${hpAmount} HP!`);

                break;
        }

        line = arr[index];
        index++;
    }

    for (let hero of heroes) {
        let { name, hp, mp } = hero;
        console.log(name);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }

}
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ])