//les durees sont en secondes.


let recettes = [{
    menu: 'Riz au curry',
    type: 'plat',
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
    menu: "French Tacos XL",
    type: 'plat',
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
    menu: "Dombre aux crevettes",
    type: 'plat',
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
    menu: 'Pates carbonara',
    type: 'plat',
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
    menu: "Couscous poulet et merguez facile",
    type: 'plat',
    ingredients: ['2 oignons', 'poivre', 'sel', '3 cuillères à soupe d huile de tournesol', '800g de crevettes','2 cuilleres de farine', 'une grande boite de tomates pelees', '1 cuillères a cafe', '1 gouse d ail'],
    dureePreparation: 1800,
    dureeRepos: 0,
    dureeCuisson: 2400,
    dureeTotale: 4200,
    nbPersonnes: 6,
    ustensiles: ['1 couteau', '1 cocotte-minute', '1 cuillere en bois','1 blender chauffant','1 set de 3 poeles'],
    difficulte: 'Facile',
},

{
    menu: "Boeuf Bourguignon rapide",
    type: 'plat',
    ingredients: ['oignon', 'poivre', 'sel', '250g de champignons de Paris (en boite)','66cl de vin rouge','50g de beurre ou 3 cuillieres a soupe d huile', '100g de lardons','500g de farine', '800g de boeuf pour bourguignon', '1 bouquet garni', '1 gouse d ail'],
    dureePreparation: 600,
    dureeRepos: 0,
    dureeCuisson: 3600,
    dureeTotale: 4200,
    nbPersonnes: 6,
    ustensiles: ['1 mixeur', '1 cocotte', '1 couteau', '1 pinceaux', '1 cuillere en bois','1 mijoteuse electrique','1 balance de cuisine'],
    difficulte: 'Facile',
},

{
    menu: 'Accras de morue',
    type: 'plat',
    ingredients: ['0.5 cuillere a cafe de levure chimique', 'pincee de piment en poudre', '150g de farine', '2 branches de persil', '1 oignon emince', '250g de morue salee', '1 bouquet garni (thyn, laurier)','cive (ciboule ou ciboulette)', '10cl de lait bouilli refroidi ou 5cl de lait et 5cl d eau', '2 oeufs'],
    dureePreparation: 1200,
    dureeRepos: 0,
    dureeCuisson: 300,
    dureeTotale: 1500,
    nbPersonnes: 6,
    ustensiles: ['1 Ecumoire', '1 couvercle', '1 couteau', '1 assiette', '1 balance'],
    difficulte: 'Facile',
},

{
    menu: 'Gratin de gnocchis au poulet',
    type: 'plat',
    ingredients: ['1 noix de beurre','2 cubes de bouillon de volaille','1 pot de craime fraiche a 20%','4 escalopes de poulet epaisses (environ 800g','800g de gnocchis frais','1 brique de 20cl de craime liquide','300g de mozzarella'],
    dureePreparation: 1200,
    dureeRepos: 0,
    dureeCuisson: 1200,
    dureeTotale: 2400,
    nbPersonnes: 4,
    ustensiles: ['1 four', '1 couvercle', '1 poele', '1 plat a gratin', '1 balance de cuisine','1 couteau','1 planche a decouper','1 cuillere en bois','1 plat','1 casserole'],
    difficulte: 'Difficile',
},

{
    menu: 'Tiramisu-speculoos',
    type: 'dessert',
    ingredients: ['1 cuillere a soupe d amaretto','300g de speculoos','80g de sucre roux','250g de mascarpone','1 sachet de sucre vanille','3 oeufs','2 tasses de cafe noirs assez fort','30g de cacao en poudre non sucre'],
    dureePreparation: 1500,
    dureeRepos: 0,
    dureeCuisson: 0,
    dureeTotale: 1500,
    nbPersonnes: 6,
    ustensiles: ['1 saladier', '1 plat', '1 fouet de cuisine', '1 plat a gratin', '1 balance de cuisine','1 rrobot patissier'],
    difficulte: 'Moyenne',
},

{
    menu: 'Punch',
    type: 'Boisson',
    ingredients: ['poivre de moulin + un peu de cannelle', '4 cuilleres a soupe de vanille liquide', '1 gousse de vanille', '1L de rhum blanc', '1L de jus de banane', '1L de goyave', '1L de jus d ananas, 1L de jus d orange', 'jus de citron vert', '2 verres de sirop de sucre de canne'],
    dureePreparation: 600,
    dureeRepos: 0,
    dureeCuisson: 0,
    dureeTotale: 600,
    nbPersonnes: 15,
    ustensiles: ['1 recipient de 10L'],
    difficulte: 'Facile',
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

setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);

  const mobileNav = document.querySelector(".hamburger");
  const navbar = document.querySelector(".menubar");
  
  const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
  };
  mobileNav.addEventListener("click", () => toggleNav());
  