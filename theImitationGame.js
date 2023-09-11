function theImitationGame(arr) {

    let text = arr.shift();
  
    let comandPars = {
      "Move": ((text, num) => {
  
        let substing = text.substring(0, num)
        text = text.replace(substing, "") + substing;
        return text;
  
      }),
      "Insert": ((text, index, string) => {
  
        let firstPart = text.substring(0, index)
        text = firstPart + string + text.substring(index);
        return text;
  
      }),
      "ChangeAll": ((text, substing, textToReplace) => {
  
        while (text.includes(substing)) {
          text = text.replace(substing, textToReplace)
        }
  
        return text;
      })
    }
  
    for (let comand of arr) {
  
      if (comand === "Decode") {
        break;
      }
  
      let tokens = comand.split("|");
      let action = tokens[0];
  
      if (comand.includes("Move")) {
  
        let num = Number(tokens[1]);
        text = comandPars[action](text, num)
  
      } else if (comand.includes("Insert")) {
  
        let index = Number(tokens[1]);
        let string = tokens[2];
        text = comandPars[action](text, index, string);
  
      } else if (comand.includes("ChangeAll")) {
  
        let substing = tokens[1];
        let textToReplace = tokens[2];
        text = comandPars[action](text, substing, textToReplace);
  
      }
    }
  
    console.log(`The decrypted message is: ${text}`);
  
  
  }

  theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])