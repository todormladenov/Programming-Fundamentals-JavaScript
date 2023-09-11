function secretChat(arr) {

    let message = arr.shift();
    let isIncluded = false;
  
    let comandParser = {
      "InsertSpace": ((message, index) => {
        message = message.substring(0, index) + " " + message.substring(index);
        return message;
      }),
      "Reverse": ((message, substring) => {
        if (message.includes(substring)) {
          isIncluded = true;
          message = message.replace(substring, "");
          substring = substring.split("")
            .reverse("")
            .join("");
          message = message + substring;
  
        } else {
          console.log("error");
        }
  
        return message;
      }),
      "ChangeAll": ((message, substring, textToReplace) => {
        while (message.includes(substring)) {
          message = message.replace(substring, textToReplace);
        }
        return message;
      })
    }
  
    for (let line of arr) {
      let tokens = line.split(":|:");
      let action = tokens[0];
      let substring;
  
      switch (action) {
        case "InsertSpace":
          let index = Number(tokens[1]);
          message = comandParser[action](message, index);
          console.log(message);
          break;
        case "Reverse":
          substring = tokens[1];
          message = comandParser[action](message, substring);
          if (isIncluded) {
            console.log(message);
            isIncluded = false
          }
       
          break;
        case "ChangeAll":
          substring = tokens[1];
          let textToReplace = tokens[2];
          message = comandParser[action](message, substring, textToReplace);
          console.log(message);
          break;
  
      }
    }
  
    console.log(`You have a new text message: ${message}`);
  }

  secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])