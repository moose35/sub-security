let penguins = [
    {
      name: 'Emperor',
      colors: ['Black', 'White', 'Yellow'],
      size: 1.0,
      isCute: true
    },
    {
      name: 'Little',
      colors: ['Slate-blue', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Rockhopper',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.75,
      isCute: true
    },
    {
      name: 'African',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Gentoo',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Sea Gull',
      colors: ['Gray'],
      size: 0.25,
      isCute: false
    },
    {
      name: 'Chinstrap',
      colors: ['Black', 'White'],
      size: 0.25,
      isCute: true
    },
    {
      name: 'Macaroni',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.5,
      isCute: true
    },
  ];

  console.log('The ' + penguins[4].name + ' is ' + penguins[4].colors[0] + ' and ' + penguins[4].colors[1] + '.');

  function penguinBios(name){
  for (i = 0; i < penguins; i++)
    if (name === penguins[i].name){
    }
    return (penguins[i].name && penguins[i].colors);
  }

 console.log(penguinBios('Gentoo'));

 for(let penguin of penguins){
     console.log('Thee ' + penguin.name);
 }