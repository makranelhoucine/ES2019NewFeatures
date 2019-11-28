const records = [
    {nom: 'MAKRAN', prenom: 'El houcine', nationalite: ['Marocaine']},
    {nom: 'KHALFOUNI', prenom: 'Yannick', nationalite: ['Francaise']},
    {nom: 'SAIDOU BARRY', prenom: 'Thierno', nationalite: ['Guinéenne']},
    {nom: 'EA', prenom: 'Romain', nationalite: ['Francaise']},
    {nom: 'Yasser', prenom: 'Slimani', nationalite: ['Marocaine', 'Francaise']},
]
// en ES6 
const flattenValues = [].concat.apply([], records
.map(element => element.nationalite));
console.log(flattenValues);

//en ES10
console.log(records.flatMap(element => element.nationalite));