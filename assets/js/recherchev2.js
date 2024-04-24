let searchSystem = () => {
let recettes = []
let filtered = []

fetch('api.php').then(r => {
    return r.json()
}).then(data => {
    recettes = data
})

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('resultsList');

    searchInput.addEventListener("keyup", function() {
        console.log(searchInput.value)
        filtered = recettes.filter(recette => {
            return recette.menu.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1;
        })

        resultsList.innerHTML = ""
        for (let recette of filtered) {
            let recetteContainer = document.createElement('li')
            recetteContainer.textContent = recette.menu

            resultsList.appendChild(recetteContainer);
        }
    })
})
}

searchSystem()