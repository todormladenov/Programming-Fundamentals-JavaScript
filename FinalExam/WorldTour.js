function worldTour(arr) {

    let text = arr.shift();
  
    let comandParser = {
      "Add Stop": ((text, index, string) => {
  
        if (index >= 0 && index < text.length) {
          let firstPart = text.substring(0, index) + string;
          text = firstPart + text.substring(index);
          return text;
  
        } else {
          return text;
  
        }
      }),
      "Remove Stop": ((text, start, end) => {
  
        if ((start >= 0 && start < text.length) && (end >= 0 && end < text.length)) {
          let textOne = text.substring(0, start);
          let textTwo = text.substring(1 + end);
          text = textOne.concat(textTwo);
          return text;
  
        } else {
          return text;
  
        }
      }),
      "Switch": ((text, oldValue, newValue) => {
  
        if (text.includes(oldValue)) {
          text = text.replace(oldValue, newValue);
        }
        return text;
      })
    }
  
    for (let comand of arr) {
  
      if (comand === "Travel") {
        break;
      }
  
      let tokens = comand.split(":");
      let action = tokens[0];
  
      switch (action) {
        case "Add Stop":
          let index = Number(tokens[1]);
          let string = tokens[2];
          text = comandParser[action](text, index, string)
          console.log(text);
          break;
        case "Remove Stop":
          let start = Number(tokens[1]);
          let end = Number(tokens[2]);
          text = comandParser[action](text, start, end)
          console.log(text);
          break;
        case "Switch":
          let oldValue = tokens[1];
          let newValue = tokens[2];
          text = comandParser[action](text, oldValue, newValue)
          console.log(text);
          break;
      }
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);
  }

  worldTour((["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"]))