fetch('/data/hotels.json')
  .then(response => response.json())
  .then(data => {
    // Populate navigation
    const navList = document.querySelector('.navFlex');
    navList.innerHTML = `
      <li class="container">
        <img src="./images/image 13.svg" style="width: 130px; height: auto; padding: 0; margin: 0;">
        <div class="center"> GENIE </div>             
      </li>
    `;
    data.navigation.forEach(item => {
      const navItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.text;
      navItem.appendChild(link);
      navList.appendChild(navItem);
    });

    // Populate the title
    document.querySelector('.hotelsSection h1').textContent = data.pageTitle;

    // Populate locations
    const locationsContainer = document.querySelector('.hotelsSection');
    data.locations.forEach(location => {
      const locationDiv = document.createElement('div');
      locationDiv.classList.add('location');

      const title = document.createElement('h2');
      if (location.link) {
        const link = document.createElement('a');
        link.href = location.link;
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';
        link.textContent = location.city;
        title.appendChild(link);
      } else {
        title.textContent = location.city;
      }

      const description = document.createElement('p');
      description.textContent = location.description;

      locationDiv.appendChild(title);
      locationDiv.appendChild(description);
      locationsContainer.appendChild(locationDiv);
    });

    // Populate pagination
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';
    data.pagination.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.innerHTML = item.text;
      paginationContainer.appendChild(link);
    });
  })
  .catch(error => console.error('Error loading hotels data:', error));
