function computerStore(input) {
  
    let index = 0;
    let command = input[index];
    index++;
  
    let total = 0;
  
    while (command !== "special" && command !== "regular") {
      let partPrice = Number(command);
      if (partPrice < 0) {
        console.log("Invalid price!");
        command = input[index];
        index++;
        continue;
      } else {
        total += partPrice;
      }
      
      command = input[index];
      index++;
    }
  
    let tax = total * 0.2;
    total += tax;
    let discount = 0;
  
    if (command === "special") {
      discount = total * 0.1;
    }
  
    if (total > 0) {
      console.log("Congratulations you've just bought a new computer!");
      console.log(`Price without taxes: ${(total - tax).toFixed(2)}$`);
      console.log(`Taxes: ${tax.toFixed(2)}$`);
      console.log("-----------");
      console.log(`Total price: ${(total - discount).toFixed(2)}$`);
    } else {
      console.log("Invalid order!");
    }
  
  }

  computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])