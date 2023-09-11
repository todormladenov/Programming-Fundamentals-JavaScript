function softUniReception(input) {

    let employeeOne = Number(input[0]);
    let employeeTwo = Number(input[1]);
    let employeeThree = Number(input[2]);
    let students = Number(input[3]);
  
    let hours = 0;
  
    while (students > 0) {
    
      let maxEmployeesWork = employeeOne + employeeTwo + employeeThree;
  
      while (maxEmployeesWork > 0) {
        students--;
        maxEmployeesWork--;
        if (students === 0) {
          break;
        }
      }
  
      hours++;
  
      if (hours % 4 === 0 && hours !== 0) {
        hours++;
        continue;
      }
  
    }
  
    console.log(`Time needed: ${hours}h.`);
  
  }
  softUniReception(['5','6','4','20'])