// avant on doit developper notre fonction pour mettre aplatir un tableau
function flatArray(arrayToFlat, depth) {
    if(!depth) {
        return arrayToFlat.slice()
    }
    const flatedArray = [];
    arrayToFlat.forEach(element => {
        if(Array.isArray(element)) {
            flatedArray.push(...flatArray(element, depth -1))
        } else {
            flatedArray.push(element)
        }
    });
    return flatedArray;
}

const array = [1, [2, [3]]];
console.group('avant es10');
console.log('depth = 1', flatArray(array, 1));
//const array = [1, 2, [3]];
console.log('depth = 2', flatArray(array, 2));
console.log('Infinity',flatArray(array, Infinity));
//const array = [1, 2, 3];
console.groupEnd()

console.log('---------------------------------------');

console.group('avec es10');
console.log('depth = 1', array.flat()); //array.flat() qui est equivalent à array.flat(1);
//const array = [1, 2, [3]];
console.log('depth = 2', array.flat(2)); // Equivalent à array.flat().flat()
console.log('Infinity', array.flat(Infinity)); //(récurcif) pour un tableau de lengueur n
//const array = [1, 2, 3];
console.groupEnd()

