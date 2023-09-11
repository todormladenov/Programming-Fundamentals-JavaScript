function movingTarget(arr) {

    let targets = arr.shift().split(" ").map(a => Number(a));
    let index = 0;
    let command = arr[index];
    index++;
  
    let reduce = (a, b) => b - a;
  
    while (command !== "End") {
      let [opeation, firstNum, secondNum] = command.split(" ");
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);
  
      switch (opeation) {
        case "Shoot":
          if (firstNum > targets.length - 1 || firstNum < 0) {
            break;
          } else{
            targets[firstNum] = reduce(secondNum, targets[firstNum])
          }
          if (targets[firstNum] <= 0) {
            targets.splice(firstNum, 1);
          }
          break;
        case "Add":
          if (firstNum > targets.length - 1 || firstNum < 0) {
            console.log("Invalid placement!");
            break;
          } else{
            targets.splice(firstNum, 0, secondNum);
          }
          break;
        case "Strike":
          let startIndex = firstNum - secondNum;
          let endIndex = firstNum + secondNum;
          let elToDelete = 1 + (secondNum * 2)
          if (startIndex < 0 || endIndex > targets.length - 1) {
            console.log("Strike missed!");
            break;
          } else{
          targets.splice(startIndex, elToDelete);
          }
          break;
      }
  
      command = arr[index];
      index++;
    }
  
    if (command === "End") {
      console.log(targets.join("|"));
    }
  
  
  }

  movingTarget((["52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"]))