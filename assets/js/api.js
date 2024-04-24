var map = L.map('map').setView([49.263595644006735, 4.035096381935233], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([49.263595644006735, 4.035096381935233]).addTo(map); // Reims - Rue de la Justice