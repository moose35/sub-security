
// console.log('Hello');
// let arrayNum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arrayNum);

// for loop test
for (let i = 1; i < 11; i++) {
    console.log(i);
};

// objects

const topHat = {
    type: 'Top hat',
    size: 14,
    color: 'Black',

};

const baseballHat = {
    type: 'baseball cap',
    size: 12,
    color: 'red and white',

};

const hats = [topHat, baseballHat];

console.log(hats[1].color);


console.log('the ' + hats[0].type + ' is ' + hats[0].color + ' and the ' + hats[1].type + ' is ' + hats[1].color);

for (let i = 0; i < hats.length; i++) {
    console.log('the ' + hats[i].type + ' is ' + hats[i].color);
}

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

console.log('the');
for (let i = 0; i < penguins.length; i++) {
    console.log('The ' + penguins[i].name + ' is ' + penguins[i].size + 'm tall.');
}

console.log('All penguins', penguins);
console.log('Zoo Penguins', checkPenguins(penguins, 0.4 ));

function checkPenguins(allPenguins, height) {
    let cutePenguins = [];
    for (let i = 0; i < allPenguins.length; i++) {
        if (allPenguins[i].isCute && allPenguins[i].size < height) {
            cutePenguins.push(allPenguins[i]);
        }
    }
    return cutePenguins;
}
