console.log('Spread lecture');

const numberList = [2, 5, 3];
const newNumber = 7;


//  numberList.push(newNumber);

 const newNumberList = [...numberList, newNumber]


console.log(newNumberList);

//spread for objects

const bowler = {
    name: 'Luke',
    lastBowlingScore: 58,
};

// change last bowling score to 103
// bowler.lastBowlingScore = 103;

const updateBowler = {
 ...bowler,
    lastBowlingScore: 103,
};

console.log(updateBowler);