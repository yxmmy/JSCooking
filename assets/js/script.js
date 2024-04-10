//les durees sont en secondes.

let recettes = [{
    plat: 'Riz au curry',
    ingredients: ['2 cuilleres a soupe d huile d olive', 'curry en poudre', 'cube de bouillon', '2 tasses de riz', 'eau'], 
    dureePreparation: 900,
    dureeRepos: 0,
    dureeCuisson: 900,
    nbPersonnes: 1,
    ustensiles:  ['passoire', 'poele', 'cuillere en bois'],
    difficulte: 'Facile.',
    dureeTotale: 1800,
},

{
    plat: "French Tacos XL",
    ingredients: ['huile de tournesol', 'poivre', 'sel', '20cl de creme fraiche', '2 tortillas', '1 sauce au choix', '1 pomme de terre', '1 steak hache', '30g de fromage'],
    dureePreparation: 1500,
    dureeRepos: 0,
    dureeCuisson: 3300,
    dureeTotale: 4800,
    nbPersonnes: 1,
    ustensiles:  ['1 casserole', '1 four', '3 poeles', 'planche a decouper'],
    difficulte: 'Facile',
},

{
    plat: "Dombre aux crevettes",
    ingredients: ['oignon', 'poivre', 'sel', '3 cuillères à soupe d huile de tournesol', '800g de crevettes','500g de farine', 'une grande boite de tomates pelees', '1 cuilleres a cafe', '1 gouse d ail'],
    dureePreparation: 1900,
    dureeRepos: 0,
    dureeCuisson: 2400,
    dureeTotale: 4300,
    nbPersonnes: 5,
    ustensiles: ['1 bol', '1 couvercle', '1 couteau', '1 marmite', '1 balance'],
    difficulte: 'Moyenne',
},

{
    plat: 'Pates à la carbonara',
    ingredients: ['1 oignon', 'poivre', 'sel', '125g de lardons','25cl de creme fraiche', '250g de pates', '1 jaune d oeuf'],
    dureePreparation: 600,
    dureeRepos: 0,
    dureeCuisson: 600,
    dureeTotale: 1200,
    nbPersonnes: 2 ,
    ustensiles: ['1 passoire, 1 couteau', '3 poeles', '1 saladier', '1 cuillere en bois', '1 casserole', '1 plat'],
    difficulte: 'Facile',
},
{
    plat: "Couscous poulet et merguez facile",
    ingredients: ['2 oignons', 'poivre', 'sel', '3 cuillères à soupe d huile de tournesol', '800g de crevettes','2 cuillièr de farine', 'une grande boite de tomates pelees', '1 cuillères a cafe', '1 gouse d ail'],
    dureePreparation: 1900,
    dureeRepos: 0,
    dureeCuisson: 2400,
    dureeTotale: 10,
    nbPersonnes: 6,
    ustensiles: ['1 bol', '1 couvercle', '1 couteau', '1 marmite', '1 balance'],
    difficulte: 'Moyenne',
},{
    plat: "Boeuf Bourguignon rapide",
    ingredients: ['oignon', 'poivre', 'sel', '250g de champignons de Paris (en boite)','66cl de vin rouge','50g de beurre ou 3 cuillieres a soupe d huile', '100g de lardons','500g de farine', '800g de boeuf pour bourguignon', '1 bouquet garni', '1 gouse d ail'],
    dureePreparation: 600,
    dureeRepos: 0,
    dureeCuisson: 3600,
    dureeTotale: 4200,
    nbPersonnes: 6,
    ustensiles: ['1 mixeur', '1 cocotte', '1 couteau', '1 pinceaux', '1 cuillere en bois','1 mijoteuse electrique','1 balance de cuisine'],
    difficulte: 'Facile',
},{
    plat: "Dombre aux crevettes",
    ingredients: ['oignon', 'poivre', 'sel', '3 cuillères à soupe d huile de tournesol', '800g de crevettes','500g de farine', 'une grande boite de tomates pelees', '1 cuillères a cafe', '1 gouse d ail'],
    dureePreparation: 1900,
    dureeRepos: 0,
    dureeCuisson: 2400,
    dureeTotale: 10,
    nbPersonnes: 5,
    ustensiles: ['1 bol', '1 couvercle', '1 couteau', '1 marmite', '1 balance'],
    difficulte: 'Moyenne',
},
]

function filterItems(recettes, key, value) {
    let filteredRecipes = [];

    // Filtrer les recettes en fonction de la clé et de la valeur spécifiées
    for (let recipe of recettes) {
        if (recipe[key] === value) {
            filteredRecipes.push(recipe);
        }
    }

    return filteredRecipes;
}

const easyRecipes = filterItems(recettes, 'difficulte', 'Facile');
const fastRecipes = filterItems(recettes, 'dureeCuisson', 0);

console.log("Recettes faciles :", easyRecipes);
console.log("Recettes rapides :", fastRecipes);
