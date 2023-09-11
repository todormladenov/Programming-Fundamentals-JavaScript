function destinationMapper(text) {

    let travelPoints = 0;
    let regex = /([=]|[\/])[A-Z][A-Za-z]{2,}\1/gm
  
    let destinations = [];
    
    let match = regex.exec(text);
  
    while (match) {
      let destination = match[0];
      destination = destination.substring(1, destination.length - 1);
      destinations.push(destination);
      travelPoints += destination.length
      
      match = regex.exec(text)
    }
  
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
  
    
  }
  destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")