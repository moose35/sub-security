// const caterpillarToButterfly = function (caterpillar){
// return { name: caterpillar, isButterfly: true};
// };

const caterpillarToButterfly = (caterpillar) => ({ name: caterpillar, isButterfly: true});

console.log(caterpillarToButterfly('Ben'));

const caterpillarArray = [
    'Ben',
    'Daisy',
    'Charlotte',
    'Logan'
];

// const butterflyArray = [];

// function newButt(array){
// for (let i = 0; i < array.length; i++) {
//     const worm = array[i];
//     butterflyArray.push(caterpillarToButterfly(worm));
// } return butterflyArray;
// }

// console.log(newButt(caterpillarArray));

// caterpillarArray.forEach(function(catepillarName){
//     const newButterfly = caterpillarToButterfly(catepillarName)
//     butterflyArray.push(newButterfly);

// }); for each

// const butterflyArray = caterpillarArray.map(function(catepillarName){
//     const newButterfly = caterpillarToButterfly(catepillarName);
//     return newButterfly;

// });

// const butterflyArray = caterpillarArray.map((catepillarName) => caterpillarToButterfly(catepillarName));

const butterflyArray = caterpillarArray.map((catepillarName) => (
    { name: catepillarName, isButterfly: true}
));


console.log(butterflyArray);
