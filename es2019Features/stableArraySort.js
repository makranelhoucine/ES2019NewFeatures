
const items = [
	{ name: "Milly",   rating: 5 },
	{ name: "Patches", rating: 3 },
	{ name: "Devlin",  rating: 5 },
	{ name: "Eagle",   rating: 1 },
	{ name: "Jenny",   rating: 5 },
	{ name: "Kona",    rating: 3 },
	{ name: "Leila",   rating: 2 },
	{ name: "Oliver",  rating: 4 },
	{ name: "Choco",   rating: 4 },
	{ name: "Molly",   rating: 3 },
	{ name: "Nova",    rating: 6 }
];

//pour un tableau de 11 element au minimum 
//pour garder l'ordre initial des element qui ont la meme valeur, on faisait
// demo https://repl.it/repls/PoisedRoyalblueSequel
/* items.forEach((item, index) => {
    item.index = index;
});

items.sort(function (a, b) {
    if(a.rating === a.rating) {
        return a.index - b.index;
    }
    return a.rating - b.rating;
}); */

// avec ES2019, la methode sort est stable
// alosr il garde l'ordre initial dans le tableau des elements identique
items.sort(function (a, b) {
    return a.rating - b.rating;
});
console.log(items);