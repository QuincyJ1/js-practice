console.clear();



function getPlanetName(id){

    const name = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

 let res = [];
for (let i = 0; i < name.length - 1; i++) {
    res += name[i];
    let res2 = [];
for (let x = 0; x < res.length; x++) {
    res2 = name[i][x];
}
return res2
}
    


  }

  console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');