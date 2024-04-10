


recettes = [{
    plat: 'Riz au curry',
    ingredients: ['2 cuilleres a soupe d huile d olive', 'curry en poudre', 'cube de bouillon', '2 tasses de riz', 'eau'], 
    dureePreparation: 900,
    dureeRepos: 0,
    dureeCuisson: 900,
    dureeTotale: dureeCuisson + dureeRepos + dureeCuisson,
    nbPersonnes: 4,
    ustensiles:  ['passoire', 'poele', 'cuillere en bois'],
    difficulte: 'Très facile.',
},

{
    plat: "French Tacos XL",
    ingredients: ['huile de tournesol', 'poivre', 'sel', '20cl de creme fraiche', '2 tortillas', '1 sauce au choix', '1 pomme de terre', '1 steak hache', '30g de fromage'],
    dureePreparation: 1500,
    dureeRepos: 0,
    dureeCuisson: 3300,
    dureeTotale: dureeCuisson + dureeRepos + dureeCuisson,
    nbPersonnes: 1,
    ustensiles:  ['1 casserole', '1 four', '3 poeles', 'planche a decouper'],
    difficulte: 'Facile',
},

{
    plat: "Dombre au crevettes",
    ingredients: ['oignon', 'poivre', 'sel', '3 cuillères à soupe d huile de tournesol', '800g de crevettes','500g de farine', 'une grande boite de tomates pelees', '1 cuillères a cafe', '1 gouse d ail'],
    dureePreparation: 1900,
    dureeRepos: 0,
    dureeCuisson: 2400,
    dureeTotale: dureeCuisson + dureeRepos + dureeCuisson,
    nbPersonnes: 5,
    ustensiles: ['1 bol', '1 couvercle', '1 couteau', '1 marmite', '1 balance'],
    difficulte: 'Moyenne',
}]

/*function filterItems (recettes, key, value) {
    let filteredRecipes = [];
    for(let i=0; i < recettes.length; i++) {
        if(recettes[i][key] === value){
            filteredRecipes.push(recettes[i]);              Revoir ce code
        }
    }
    groupItemBy()
    return filteredRecipes
}*/

const easyRecipes = filterItems(recettes, 'difficulte', 'Facile')
const fastRecipes = filterItems(recettes, 'dureeCuisson', 0)


filter(recettes,'plat',)