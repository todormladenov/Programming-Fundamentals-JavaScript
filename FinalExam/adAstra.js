function adAstra(arr) {

    let text = arr[0];
  
    let regex = /([\|]|[#])(?<food>[A-Za-z\s]+)\1(?<expiration>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/gm;
  
    let match = regex.exec(text);
    let sumOfCalories = 0;
    let matchedFoods = [];
  
    while (match) {
  
      let obj = {
        food: match.groups.food,
        expiration: match.groups.expiration,
        calories: Number(match.groups.calories)
      }
  
      matchedFoods.push(obj);
      sumOfCalories += Number(match.groups.calories);
  
      match = regex.exec(text);
    }
  
    let daysOfFood = Math.floor(sumOfCalories / 2000);
  
    console.log(`You have food to last you for: ${daysOfFood} days!`);
  
    if (matchedFoods.length > 0) {
      for (let foodInfo of matchedFoods) {
        let {food, expiration, calories} = foodInfo;
        console.log(`Item: ${food}, Best before: ${expiration}, Nutrition: ${calories}`);
      }
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])