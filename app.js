"use strict";

const loading = document.getElementById('loading');
const container = document.getElementById('characters-container');

async function fetchCharacters(category) {
  container.innerHTML = '';
  loading.style.display = 'block';
  // await new Promise(function(resolve) {
  //   container.innerHTML = '';
  //   loading.style.display = 'block';
  //   resolve();
  // })
  await new Promise(resolve => setTimeout(resolve, 200));
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/all.json');
  const json = await response.json();
  // console.log(json);
  for (const character of json) {
    const card = document.createElement('div');
    card.classList.add('character-card');
    if (character.category == category || category == 'all') {
      card.innerHTML = `
        <img src="https://ihatov08.github.io/${character.image}" alt="${character.name}" class="character-image">
        <div class="character-name">${character.name}</div>
        <ul class="character-category">
            <li>${character.category}</li>
        </ul>`;
      container.appendChild(card);
    } 
  }
  loading.style.display = 'none';
}


function changeCategory() {
  const radioButtons = document.querySelectorAll('input[name="category"]');
  for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', function(event) {
      fetchCharacters(event.target.value);
    });
  }  
}

fetchCharacters('all');
changeCategory();
