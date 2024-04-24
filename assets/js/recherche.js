document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('resultsList');

    const items = {
        'Tacos': 'https://www.google.com',
        'Riz au Curry': 'https://www..com',
        'Punch': 'https://www.google.com',
        'Dombré': 'https://www.google.com',
        'Boeuf Bourguignon': 'https://www.google.com',
        'Pates carbonara': 'https://www.google.com',
        'Couscous': 'https://www.google.com',
        'Accras': 'https://www.google.com',
        'Gratin de Gnocchis au poulet': 'https://www.google.com',
    };

    function displayResults(results) {
        resultsList.innerHTML = '';
        if (results.length === 0) {
            resultsList.innerHTML = '<li>Aucun résultat trouvé</li>';
        } else {
            results.forEach((item) => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = item;
                link.href = items[item];
                li.appendChild(link);
                resultsList.appendChild(li);
            });
        }
    }

    function search(query) {
        const results = Object.keys(items).filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
        displayResults(results);
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        search(query);
    });
});