document.addEventListener('DOMContentLoaded', () => {
    console.log('Script running');
    fetch('travels.json')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data);
            const travelContainer = document.getElementById('travelOptions');
            travelContainer.innerHTML = ''; // Clear existing content to prevent duplication
            data.forEach(option => {
                const div = document.createElement('div');
                div.className = 'location';
                div.innerHTML = `
                    <h2><a href="${option.link}">${option.type}</a></h2>
                    <p>${option.description}</p>
                `;
                travelContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
