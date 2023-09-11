function mirrorWords(arr) {

    let text = arr[0];
    let regex = /([@]|[#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/gm;
  
    let matched = [...text.matchAll(regex)];
    let result = [];
    let foundPairs = 0;
  
    for (let el of matched) {
      let wordOneReversed = el.groups.wordOne.split("")
        .reverse("")
        .join("");
      let wordTwoReversed = el.groups.wordTwo.split("")
        .reverse("")
        .join("");
  
      if (el.groups.wordOne === wordTwoReversed && el.groups.wordTwo === wordOneReversed) {
        result.push(`${el.groups.wordOne} <=> ${el.groups.wordTwo}`)
      }
  
      foundPairs++;
  
    }
  
    if (foundPairs > 0) {
      console.log(`${foundPairs} word pairs found!`);
    } else {
      console.log("No word pairs found!");
    }
  
    if (result.length > 0) {
      console.log("The mirror words are:");
      console.log(result.join(", "));
    } else {
      console.log("No mirror words!");
    }
  
  
  }
  mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])