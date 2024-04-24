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
