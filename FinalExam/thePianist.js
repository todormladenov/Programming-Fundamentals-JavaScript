function thePianist(arr) {

    let numOfPieses = Number(arr.shift());
    let pianoPieces = [];
  
    for (let i = 0; i < numOfPieses; i++) {
      let [piece, composor, key] = arr[i].split("|");
      let found = pianoPieces.find(p => p.piece === piece);
  
      if (!found) {
        let obj = {
          piece: piece,
          composor: composor,
          key: key
        }
        pianoPieces.push(obj);
      }
    }
  
    let index = numOfPieses;
    let comand = arr[index];
    index++;
  
    while (comand !== "Stop") {
  
      let tokens = comand.split("|");
      let action = tokens[0];
      let piece = tokens[1];
      let composor;
      let key;
      let found = pianoPieces.find(p => p.piece === piece)
  
      switch (action) {
        case "Add":
          composor = tokens[2];
          key = tokens[3];
  
          if (!found) {
            let obj = {
              piece: piece,
              composor: composor,
              key: key
            }
  
            pianoPieces.push(obj);
            console.log(`${piece} by ${composor} in ${key} added to the collection!`);
  
          } else {
            console.log(`${piece} is already in the collection!`);
  
          }
          break;
        case "Remove":
  
          if (found) {
            let indexOfPiece = pianoPieces.indexOf(found)
            pianoPieces.splice(indexOfPiece, 1);
            console.log(`Successfully removed ${piece}!`);
          } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
  
          }
  
          break;
        case "ChangeKey":
  
          if (found) {
            let newKey = tokens[2];
            found.key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
  
          } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
  
          }
          break;
      }
  
      comand = arr[index];
      index++;
    }
  
    for (let el of pianoPieces) {
      let {piece, composor, key} = el;
      console.log(`${piece} -> Composer: ${composor}, Key: ${key}`);
    }
  
  }
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])