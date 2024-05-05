"use strict";

// fetch('https://ihatov08.github.io/kimetsu_api/api/all.json').then(function(response) {
//   return response.json()
// }).then(function(json){
//   console.log(json);
//   for (const character of json) {
//     console.log(character)
//   }
// })

async function fetchCharacters() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/all.json');
  const json = await response.json();
  for (const character of json) {
    // console.log(character)
    const card = document.createElement('div');
    card.classList.add('character-card');
    card.innerHTML = `
      <img src="https://ihatov08.github.io/${character.image}" alt="${character.name}" class="character-image">
      <div class="character-name">"${character.name}"</div>
      <ul class="character-category">
          <li>"${character.category}"</li>
      </ul>`;
    console.log(card)
    const container = document.querySelector('.characters-container');
    container.appendChild(card);
    console.log(container);
  }
}

fetchCharacters();

// const card = document.createElement('div');
// card.classList.add('character-card');
// card.innerHTML = `
//   <img src="https://example.com/characters/tanjiro.jpg" alt="竈門炭治郎" class="character-image">
//   <div class="character-name">竈門炭治郎</div>
//   <ul class="character-category">
//       <li>鬼殺隊</li>
//   </ul>`;
// console.log(card)
// const container = document.querySelector('.characters-container');
// container.appendChild(card);
// console.log(container);