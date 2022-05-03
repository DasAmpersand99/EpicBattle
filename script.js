//---continue_btn variablen definieren und hover effects---
let continueBtnHeros = document.getElementById('continue_btn_heros');
let continueArrowHeros = document.getElementById('continue_arrow_heros');

let continueBtnWeapons = document.getElementById('continue_btn_weapons');
let continueArrowWeapons = document.getElementById('continue_arrow_weapons');

let continueBtnPets = document.getElementById('continue_btn_pets');
let continueArrowPets = document.getElementById('continue_arrow_pets');

let continueBtnShips = document.getElementById('continue_btn_ships');
let continueArrowShips = document.getElementById('continue_arrow_ships');

let continueBtnSpells = document.getElementById('continue_btn_spells');
let continueArrowSpells = document.getElementById('continue_arrow_spells');

let continueBtnItems = document.getElementById('continue_btn_items');
let continueArrowItems = document.getElementById('continue_arrow_items');

let continueBtn = document.getElementsByClassName('continue_btn');
let continueArrow = document.getElementsByClassName('continue_arrow');

//continueBtnHeros
continueBtnHeros.addEventListener('mouseover', function () {
  continueBtnHeros.style.background = '#94a0ab';
  continueBtnHeros.style.marginLeft = '10px';
});
continueBtnHeros.addEventListener('mouseout', function () {
  continueBtnHeros.style.background = '#6c757d';
  continueBtnHeros.style.marginLeft = '5px';
});

//continueBtnWeapons
continueBtnWeapons.addEventListener('mouseover', function () {
  continueBtnWeapons.style.background = '#94a0ab';
  continueBtnWeapons.style.marginLeft = '10px';
});
continueBtnWeapons.addEventListener('mouseout', function () {
  continueBtnWeapons.style.background = '#6c757d';
  continueBtnWeapons.style.marginLeft = '5px';
});

//continueBtnPets
continueBtnPets.addEventListener('mouseover', function () {
  continueBtnPets.style.background = '#94a0ab';
  continueBtnPets.style.marginLeft = '10px';
});
continueBtnPets.addEventListener('mouseout', function () {
  continueBtnHeros.style.background = '#6c757d';
  continueBtnHeros.style.marginLeft = '5px';
});

//continueBtnShips
continueBtnShips.addEventListener('mouseover', function () {
  continueBtnShips.style.background = '#94a0ab';
  continueBtnShips.style.marginLeft = '10px';
});
continueBtnShips.addEventListener('mouseout', function () {
  continueBtnShips.style.background = '#6c757d';
  continueBtnShips.style.marginLeft = '5px';
});

//continueBtnSpells
continueBtnSpells.addEventListener('mouseover', function () {
  continueBtnSpells.style.background = '#94a0ab';
  continueBtnSpells.style.marginLeft = '10px';
});
continueBtnSpells.addEventListener('mouseout', function () {
  continueBtnSpells.style.background = '#6c757d';
  continueBtnSpells.style.marginLeft = '5px';
});

//continueBtnItems
continueBtnItems.addEventListener('mouseover', function () {
  continueBtnItems.style.background = '#94a0ab';
  continueBtnItems.style.marginLeft = '10px';
});
continueBtnItems.addEventListener('mouseout', function () {
  continueBtnItems.style.background = '#6c757d';
  continueBtnItems.style.marginLeft = '5px';
});

//---heros verschwinden und weapons erscheinen usw---
let epicTitle = document.getElementById('epic_title');

let allHeros = document.getElementById('all_heros');
let allWeapons = document.getElementById('all_weapons');
let allPets = document.getElementById('all_pets');
let allShips = document.getElementById('all_ships');
let allSpells = document.getElementById('all_spells');
let allItems = document.getElementById('all_items');

function toWeapons() {
  allHeros.style.display = 'none';
  allWeapons.style.display = 'flex';
  continueBtnHeros.style.display = 'none';
  continueBtnWeapons.style.display = 'flex';
  epicTitle.innerHTML = 'Wähle deine (2) Waffen';
}

function toPets() {
  allWeapons.style.display = 'none';
  allPets.style.display = 'flex';
  continueBtnWeapons.style.display = 'none';
  continueBtnPets.style.display = 'flex';
  epicTitle.innerHTML = 'Wähle deinen Gefährten';
}

function toShips() {
  allPets.style.display = 'none';
  allShips.style.display = 'flex';
  continueBtnPets.style.display = 'none';
  continueBtnShips.style.display = 'flex';
  epicTitle.innerHTML = 'Wähle dein Kampfschiff';
}

function toSpells() {
  allShips.style.display = 'none';
  allSpells.style.display = 'flex';
  continueBtnShips.style.display = 'none';
  continueBtnSpells.style.display = 'flex';
  epicTitle.innerHTML = 'Wähle deine (3) Zauber';
}

function toItems() {
  allSpells.style.display = 'none';
  allItems.style.display = 'flex';
  continueBtnSpells.style.display = 'none';
  continueBtnItems.style.display = 'flex';
  epicTitle.innerHTML = 'Wähle deine (3) Artefakte';
}

function toOverwiev() {
  console.log('overview');
}

//---hover effekt---
//captain jack sparrow
let imgSparrow = document.getElementById('img_sparrow');
let imgCena = document.getElementById('img_cena');
let imgJoel = document.getElementById('img_joel');

document
  .getElementById('hero_div_sparrow')
  .addEventListener('mouseover', function () {
    imgSparrow.style.opacity = '0.93';
    document.getElementById('hero_div_sparrow').style.border =
      '3px solid rgb(120, 120, 120)';
  });
document
  .getElementById('hero_div_sparrow')
  .addEventListener('mouseout', function () {
    imgSparrow.style.opacity = '1';
    document.getElementById('hero_div_sparrow').style.border =
      '3px solid rgb(88, 93, 99)';
  });

//john cena
document
  .getElementById('hero_div_cena')
  .addEventListener('mouseover', function () {
    imgCena.style.opacity = '0.93';
    document.getElementById('hero_div_cena').style.border =
      '3px solid rgb(120, 120, 120)';
  });
document
  .getElementById('hero_div_cena')
  .addEventListener('mouseout', function () {
    imgCena.style.opacity = '1';
    document.getElementById('hero_div_cena').style.border =
      '3px solid rgb(88, 93, 99)';
  });

//joel
document
  .getElementById('hero_div_joel')
  .addEventListener('mouseover', function () {
    imgJoel.style.opacity = '0.93';
    document.getElementById('hero_div_joel').style.border =
      '3px solid rgb(120, 120, 120)';
  });
document
  .getElementById('hero_div_joel')
  .addEventListener('mouseout', function () {
    imgJoel.style.opacity = '1';
    document.getElementById('hero_div_joel').style.border =
      '3px solid rgb(88, 93, 99)';
  });

//---hero-buttons funktionen---
//captain jack sparrow
//img_btn
let imgBtnSparrow = document.getElementById('img_btn_sparrow');
let statsBtnSparrow = document.getElementById('stats_btn_sparrow');
let infoBtnSparrow = document.getElementById('info_btn_sparrow');

let imgTextSparrow = document.getElementById('img_text_sparrow');
let statsTextSparrow = document.getElementById('stats_text_sparrow');
let infoTextSparrow = document.getElementById('info_text_sparrow');

const imgButtons = document.querySelectorAll('.img_btn');
imgButtons.forEach((imgBtn) => {
  imgBtn.addEventListener('click', img_btn_func);
});

const statsButtons = document.querySelectorAll('.stats_btn');
statsButtons.forEach((statsBtn) => {
  statsBtn.addEventListener('click', stats_btn_func);
});

const infoButtons = document.querySelectorAll('.info_btn');
infoButtons.forEach((infoBtn) => {
  infoBtn.addEventListener('click', info_btn_func);
});

function img_btn_func(event) {
  const card = event.target.closest('.card_btns');
  const imgBtn = card.querySelector('.img_btn');
  const statsBtn = card.querySelector('.stats_btn');
  const infoBtn = card.querySelector('.info_btn');

  if (!imgBtn.classList.contains('active')) {
    const hero = card.closest('.hero_div');
    console.log(hero);
    const imgText = hero.querySelector('.img_text_hero');
    const statsText = hero.querySelector('.stats_text_hero');
    const infoText = hero.querySelector('.info_text_hero');

    imgBtn.style.opacity = '0.8';
    statsBtn.style.opacity = '1';
    infoBtn.style.opacity = '1';

    imgText.style.display = 'block';
    statsText.style.display = 'none';
    infoText.style.display = 'none';

    imgBtn.classList.toggle('active');
    statsBtn.classList.remove('active');
    infoBtn.classList.remove('active');
  }
}

function stats_btn_func() {
  const card = event.target.closest('.card_btns');
  const imgBtn = card.querySelector('.img_btn');
  const statsBtn = card.querySelector('.stats_btn');
  const infoBtn = card.querySelector('.info_btn');

  if (!statsBtn.classList.contains('active')) {
    const hero = card.closest('.hero_div');
    console.log(hero);
    const imgText = hero.querySelector('.img_text_hero');
    const statsText = hero.querySelector('.stats_text_hero');
    const infoText = hero.querySelector('.info_text_hero');

    imgBtn.style.opacity = '1';
    statsBtn.style.opacity = '0.5';
    infoBtn.style.opacity = '1';

    imgText.style.display = 'none';
    statsText.style.display = 'block';
    infoText.style.display = 'none';

    imgBtn.classList.remove('active');
    statsBtn.classList.toggle('active');
    infoBtn.classList.remove('active');
  }
}

function info_btn_func(event) {
  const card = event.target.closest('.card_btns');
  const imgBtn = card.querySelector('.img_btn');
  const statsBtn = card.querySelector('.stats_btn');
  const infoBtn = card.querySelector('.info_btn');

  if (!infoBtn.classList.contains('active')) {
    const hero = card.closest('.hero_div');
    console.log(hero);
    const imgText = hero.querySelector('.img_text_hero');
    const statsText = hero.querySelector('.stats_text_hero');
    const infoText = hero.querySelector('.info_text_hero');

    imgBtn.style.opacity = '1';
    statsBtn.style.opacity = '1';
    infoBtn.style.opacity = '0.7';

    imgText.style.display = 'none';
    statsText.style.display = 'none';
    infoText.style.display = 'block';

    imgBtn.classList.remove('active');
    statsBtn.classList.remove('active');
    infoBtn.classList.toggle('active');
  }
}

//random
//img_btn
let imgBtnRand = document.getElementById('img_btn_rand');
let infoBtnRand = document.getElementById('info_btn_rand');

let imgTextRand = document.getElementById('img_text_rand');
let infoTextRand = document.getElementById('info_text_rand');

imgBtnRand.addEventListener('click', function () {
  if (!imgBtnRand.classList.contains('img-btn-rand-active')) {
    infoBtnRand.style.opacity = '1';
    imgBtnRand.style.opacity = '0.8';

    imgTextRand.style.display = 'block';
    infoTextRand.style.display = 'none';

    imgBtnRand.classList.toggle('img-btn-rand-active');
    infoBtnRand.classList.remove('info-btn-rand-active');
  }
});
//info_btn
infoBtnRand.addEventListener('click', function () {
  if (!infoBtnRand.classList.contains('info-btn-rand-active')) {
    infoBtnRand.style.opacity = '0.7';
    imgBtnRand.style.opacity = '1';

    imgTextRand.style.display = 'none';
    infoTextRand.style.display = 'block';

    imgBtnRand.classList.remove('img-btn-rand-active');
    infoBtnRand.classList.toggle('info-btn-rand-active');
  }
});

//---Karten Wahl Funktionen---
//captain jack sparrow
document
  .getElementById('radio_container_sparrow')
  .addEventListener('click', function () {
    if (document.getElementById('hero_radio_sparrow').checked == false) {
      document.getElementById('hero_radio_sparrow').checked = true;
      document.getElementById('check_status_sparrow').innerHTML =
        '<strong>GEWÄHLT</strong>';
      document.getElementById('green_tick_sparrow').style.display = 'block';
    } else if (document.getElementById('hero_radio_sparrow').checked == true) {
      document.getElementById('hero_radio_sparrow').checked = false;
      document.getElementById('check_status_sparrow').innerHTML = 'WÄHLEN';
      document.getElementById('green_tick_sparrow').style.display = 'none';
    }
  });

//john cena
document
  .getElementById('radio_container_cena')
  .addEventListener('click', function () {
    if (document.getElementById('hero_radio_cena').checked == false) {
      document.getElementById('hero_radio_cena').checked = true;
      document.getElementById('check_status_cena').innerHTML =
        '<strong>GEWÄHLT</strong>';
      document.getElementById('green_tick_cena').style.display = 'block';
    } else if (document.getElementById('hero_radio_cena').checked == true) {
      document.getElementById('hero_radio_cena').checked = false;
      document.getElementById('check_status_cena').innerHTML = 'WÄHLEN';
      document.getElementById('green_tick_cena').style.display = 'none';
    }
  });

//joel
document
  .getElementById('radio_container_joel')
  .addEventListener('click', function () {
    if (document.getElementById('hero_radio_joel').checked == false) {
      document.getElementById('hero_radio_joel').checked = true;
      document.getElementById('check_status_joel').innerHTML =
        '<strong>GEWÄHLT</strong>';
      document.getElementById('green_tick_joel').style.display = 'block';
    } else if (document.getElementById('hero_radio_joel').checked == true) {
      document.getElementById('hero_radio_joel').checked = false;
      document.getElementById('check_status_joel').innerHTML = 'WÄHLEN';
      document.getElementById('green_tick_joel').style.display = 'none';
    }
  });

//random
document
  .getElementById('radio_container_rand')
  .addEventListener('click', function () {
    if (document.getElementById('hero_radio_rand').checked == false) {
      document.getElementById('hero_radio_rand').checked = true;
      document.getElementById('check_status_rand').innerHTML =
        '<strong>GEWÄHLT</strong>';
      document.getElementById('green_tick_rand').style.display = 'block';
    } else if (document.getElementById('hero_radio_rand').checked == true) {
      document.getElementById('hero_radio_rand').checked = false;
      document.getElementById('check_status_rand').innerHTML = 'WÄHLEN';
      document.getElementById('green_tick_rand').style.display = 'none';
    }
  });
