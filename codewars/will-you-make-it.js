console.clear();



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    
    let distance2 = fuelLeft * mpg
    if (distanceToPump <= distance2) {
      return true
    } 
    return false
    }



console.log(zeroFuel(50, 25, 2), true);
    console.log(zeroFuel(100, 50, 1), false);