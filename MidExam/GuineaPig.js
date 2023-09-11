function guineaPig(input) {

  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let weight = Number(input[3]) * 1000; 
  let isEnought = true;

  for (let i = 1; i <= 30; i++) {
    if (food < 300 || hay < (food * 0.05) || cover < (weight * 1/3)) {
      console.log("Merry must go to the pet store!");
      isEnought = false;
      break;
    }

    let day = i;
    food -= 300;

    if (day % 2 === 0) {
      hay -= (food * 0.05);
    }

    if (day % 3 === 0) {
      cover -= (weight * 1/3)
    }
  }

  if (isEnought) {
    food = food / 1000;
    hay = hay / 1000;
    cover = cover / 1000;
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
  }

   

}
guineaPig(["10", 
"5", 
"5.2", 
"1"])