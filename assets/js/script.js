let recettes = []

// Fonction pour filtrer les recettes en fonction de la difficulté
function filterRecipes() {
    const difficulty = document.getElementById('difficulty').value;

    // Filtrer les recettes en fonction de la difficulté spécifiée
    const filteredRecipes = filterItems(recettes, 'difficulte', difficulty);

    // Afficher les recettes filtrées dans le DOM
    displayFilteredRecipes(filteredRecipes);
}

// Fonction pour afficher les recettes filtrées dans le DOM
function displayFilteredRecipes(filteredRecipes) {
    const container = document.getElementById('filtered-recipes');

    // Générer du HTML à partir des recettes filtrées
    let html = '<ul>';
    filteredRecipes.forEach((recipe, index) => {
        // Ajouter un identifiant unique à chaque élément avec l'index
        html += `<li onclick="afficherDetailsRecette(${index})">${recipe.menu}</li>`;
        // Ajouter un conteneur pour les détails de la recette
        html += `<div id="details-recette-${index}" style="display: none;"></div>`;
    });
    html += '</ul>';

    // Afficher le HTML dans le conteneur
    container.innerHTML = html;
}

// Fonction pour afficher les détails d'une recette
function afficherDetailsRecette(index) {
    const recette = recettes[index]; // Récupérer la recette à partir de l'index
    const detailsRecetteContainer = document.getElementById(`details-recette-${index}`);
    // Construire le contenu HTML des détails de la recette
    const detailsHTML = `
        <p>Type: ${recette.type}</p>
        <p>Difficulté: ${recette.difficulte}</p>
        <p>Ingrédients: ${recette.ingredients.join(', ')}</p>
        <!-- Ajoutez d'autres détails ici selon vos besoins -->
    `;
    // Afficher les détails de la recette dans le conteneur
    detailsRecetteContainer.innerHTML = detailsHTML;
    // Afficher le conteneur des détails
    detailsRecetteContainer.style.display = 'block';
}

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

fetch('api.php').then(r => {
    return r.json()
}).then(data => {
    recettes = data
    filterRecipes()
})