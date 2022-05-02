//---continue_btn variablen definieren und hover effects---
let continueBtnHeros = document.getElementById("continue_btn_heros");
let continueArrowHeros = document.getElementById("continue_arrow_heros");

let continueBtnWeapons = document.getElementById("continue_btn_weapons");
let continueArrowWeapons = document.getElementById("continue_arrow_weapons");

let continueBtnPets = document.getElementById("continue_btn_pets");
let continueArrowPets = document.getElementById("continue_arrow_pets");

let continueBtnShips = document.getElementById("continue_btn_ships");
let continueArrowShips = document.getElementById("continue_arrow_ships");

let continueBtnSpells = document.getElementById("continue_btn_spells");
let continueArrowSpells = document.getElementById("continue_arrow_spells");

let continueBtnItems = document.getElementById("continue_btn_items");
let continueArrowItems = document.getElementById("continue_arrow_items");

let continueBtn = document.getElementsByClassName("continue_btn");
let continueArrow = document.getElementsByClassName("continue_arrow");

//continueBtnHeros
continueBtnHeros.addEventListener("mouseover", function () {
  continueBtnHeros.style.background = "#94a0ab";
  continueBtnHeros.style.marginLeft = "10px";
});
continueBtnHeros.addEventListener("mouseout", function () {
  continueBtnHeros.style.background = "#6c757d";
  continueBtnHeros.style.marginLeft = "5px";
});

//continueBtnWeapons
continueBtnWeapons.addEventListener("mouseover", function () {
  continueBtnWeapons.style.background = "#94a0ab";
  continueBtnWeapons.style.marginLeft = "10px";
});
continueBtnWeapons.addEventListener("mouseout", function () {
  continueBtnWeapons.style.background = "#6c757d";
  continueBtnWeapons.style.marginLeft = "5px";
});

//continueBtnPets
continueBtnPets.addEventListener("mouseover", function () {
  continueBtnPets.style.background = "#94a0ab";
  continueBtnPets.style.marginLeft = "10px";
});
continueBtnPets.addEventListener("mouseout", function () {
  continueBtnHeros.style.background = "#6c757d";
  continueBtnHeros.style.marginLeft = "5px";
});

//continueBtnShips
continueBtnShips.addEventListener("mouseover", function () {
  continueBtnShips.style.background = "#94a0ab";
  continueBtnShips.style.marginLeft = "10px";
});
continueBtnShips.addEventListener("mouseout", function () {
  continueBtnShips.style.background = "#6c757d";
  continueBtnShips.style.marginLeft = "5px";
});

//continueBtnSpells
continueBtnSpells.addEventListener("mouseover", function () {
  continueBtnSpells.style.background = "#94a0ab";
  continueBtnSpells.style.marginLeft = "10px";
});
continueBtnSpells.addEventListener("mouseout", function () {
  continueBtnSpells.style.background = "#6c757d";
  continueBtnSpells.style.marginLeft = "5px";
});

//continueBtnItems
continueBtnItems.addEventListener("mouseover", function () {
  continueBtnItems.style.background = "#94a0ab";
  continueBtnItems.style.marginLeft = "10px";
});
continueBtnItems.addEventListener("mouseout", function () {
  continueBtnItems.style.background = "#6c757d";
  continueBtnItems.style.marginLeft = "5px";
});

//---heros verschwinden und weapons erscheinen usw---
let epicTitle = document.getElementById("epic_title");

let allHeros = document.getElementById("all_heros");
let allWeapons = document.getElementById("all_weapons");
let allPets = document.getElementById("all_pets");
let allShips = document.getElementById("all_ships");
let allSpells = document.getElementById("all_spells");
let allItems = document.getElementById("all_items");

function toWeapons() {
  allHeros.style.display = "none";
  allWeapons.style.display = "flex";
  continueBtnHeros.style.display = "none";
  continueBtnWeapons.style.display = "flex";
  epicTitle.innerHTML = "Wähle deine (2) Waffen";
}

function toPets() {
  allWeapons.style.display = "none";
  allPets.style.display = "flex";
  continueBtnWeapons.style.display = "none";
  continueBtnPets.style.display = "flex";
  epicTitle.innerHTML = "Wähle deinen Gefährten";
}

function toShips() {
  allPets.style.display = "none";
  allShips.style.display = "flex";
  continueBtnPets.style.display = "none";
  continueBtnShips.style.display = "flex";
  epicTitle.innerHTML = "Wähle dein Kampfschiff";
}

function toSpells() {
  allShips.style.display = "none";
  allSpells.style.display = "flex";
  continueBtnShips.style.display = "none";
  continueBtnSpells.style.display = "flex";
  epicTitle.innerHTML = "Wähle deine (3) Zauber";
}

function toItems() {
  allSpells.style.display = "none";
  allItems.style.display = "flex";
  continueBtnSpells.style.display = "none";
  continueBtnItems.style.display = "flex";
  epicTitle.innerHTML = "Wähle deine (3) Artefakte";
}

function toOverwiev() {
  console.log("overview");
}

//---hover effekt---
//captain jack sparrow
let imgSparrow = document.getElementById("img_sparrow");
let imgCena = document.getElementById("img_cena");
let imgJoel = document.getElementById("img_joel");

document
  .getElementById("hero_div_sparrow")
  .addEventListener("mouseover", function () {
    imgSparrow.style.opacity = "0.93";
    document.getElementById("hero_div_sparrow").style.border =
      "3px solid rgb(120, 120, 120)";
  });
document
  .getElementById("hero_div_sparrow")
  .addEventListener("mouseout", function () {
    imgSparrow.style.opacity = "1";
    document.getElementById("hero_div_sparrow").style.border =
      "3px solid rgb(88, 93, 99)";
  });

//john cena
document
  .getElementById("hero_div_cena")
  .addEventListener("mouseover", function () {
    imgCena.style.opacity = "0.93";
    document.getElementById("hero_div_cena").style.border =
      "3px solid rgb(120, 120, 120)";
  });
document
  .getElementById("hero_div_cena")
  .addEventListener("mouseout", function () {
    imgCena.style.opacity = "1";
    document.getElementById("hero_div_cena").style.border =
      "3px solid rgb(88, 93, 99)";
  });

//joel
document
  .getElementById("hero_div_joel")
  .addEventListener("mouseover", function () {
    imgJoel.style.opacity = "0.93";
    document.getElementById("hero_div_joel").style.border =
      "3px solid rgb(120, 120, 120)";
  });
document
  .getElementById("hero_div_joel")
  .addEventListener("mouseout", function () {
    imgJoel.style.opacity = "1";
    document.getElementById("hero_div_joel").style.border =
      "3px solid rgb(88, 93, 99)";
  });

//---hero-buttons funktionen---
//captain jack sparrow
//img_btn
let imgBtnSparrow = document.getElementById("img_btn_sparrow");
let statsBtnSparrow = document.getElementById("stats_btn_sparrow");
let infoBtnSparrow = document.getElementById("info_btn_sparrow");

let imgTextSparrow = document.getElementById("img_text_sparrow");
let statsTextSparrow = document.getElementById("stats_text_sparrow");
let infoTextSparrow = document.getElementById("info_text_sparrow");

imgBtnSparrow.addEventListener("click", function () {
  if (!imgBtnSparrow.classList.contains("img-btn-sparrow-active")) {
    infoBtnSparrow.style.opacity = "1";
    statsBtnSparrow.style.opacity = "1";
    imgBtnSparrow.style.opacity = "0.8";

    imgTextSparrow.style.display = "block";
    statsTextSparrow.style.display = "none";
    infoTextSparrow.style.display = "none";

    statsBtnSparrow.classList.remove("stats-btn-sparrow-active");
    imgBtnSparrow.classList.toggle("img-btn-sparrow-active");
    infoBtnSparrow.classList.remove("info-btn-sparrow-active");
  }
});
//stats_btn
statsBtnSparrow.addEventListener("click", function () {
  if (!statsBtnSparrow.classList.contains("stats-btn-sparrow-active")) {
    infoBtnSparrow.style.opacity = "1";
    statsBtnSparrow.style.opacity = "0.5";
    imgBtnSparrow.style.opacity = "1";

    imgTextSparrow.style.display = "none";
    statsTextSparrow.style.display = "block";
    infoTextSparrow.style.display = "none";

    imgBtnSparrow.classList.remove("img-btn-sparrow-active");
    statsBtnSparrow.classList.toggle("stats-btn-sparrow-active");
    infoBtnSparrow.classList.remove("info-btn-sparrow-active");
  }
});
//info_btn
infoBtnSparrow.addEventListener("click", function () {
  if (!infoBtnSparrow.classList.contains("info-btn-sparrow-active")) {
    infoBtnSparrow.style.opacity = "0.7";
    statsBtnSparrow.style.opacity = "1";
    imgBtnSparrow.style.opacity = "1";

    imgTextSparrow.style.display = "none";
    statsTextSparrow.style.display = "none";
    infoTextSparrow.style.display = "block";

    imgBtnSparrow.classList.remove("img-btn-sparrow-active");
    statsBtnSparrow.classList.remove("stats-btn-sparrow-active");
    infoBtnSparrow.classList.toggle("info-btn-sparrow-active");
  }
});

//john cena
//img_btn
let imgBtnCena = document.getElementById("img_btn_cena");
let statsBtnCena = document.getElementById("stats_btn_cena");
let infoBtnCena = document.getElementById("info_btn_cena");

let imgTextCena = document.getElementById("img_text_cena");
let statsTextCena = document.getElementById("stats_text_cena");
let infoTextCena = document.getElementById("info_text_cena");

imgBtnCena.addEventListener("click", function () {
  if (!imgBtnCena.classList.contains("img-btn-cena-active")) {
    infoBtnCena.style.opacity = "1";
    statsBtnCena.style.opacity = "1";
    imgBtnCena.style.opacity = "0.8";

    imgTextCena.style.display = "block";
    statsTextCena.style.display = "none";
    infoTextCena.style.display = "none";

    statsBtnCena.classList.remove("stats-btn-cena-active");
    imgBtnCena.classList.toggle("img-btn-cena-active");
    infoBtnCena.classList.remove("info-btn-cena-active");
  }
});
//stats_btn
statsBtnCena.addEventListener("click", function () {
  if (!statsBtnCena.classList.contains("stats-btn-cena-active")) {
    infoBtnCena.style.opacity = "1";
    statsBtnCena.style.opacity = "0.5";
    imgBtnCena.style.opacity = "1";

    imgTextCena.style.display = "none";
    statsTextCena.style.display = "block";
    infoTextCena.style.display = "none";

    imgBtnCena.classList.remove("img-btn-cena-active");
    statsBtnCena.classList.toggle("stats-btn-cena-active");
    infoBtnCena.classList.remove("info-btn-cena-active");
  }
});
//info_btn
infoBtnCena.addEventListener("click", function () {
  if (!infoBtnCena.classList.contains("info-btn-cena-active")) {
    infoBtnCena.style.opacity = "0.7";
    statsBtnCena.style.opacity = "1";
    imgBtnCena.style.opacity = "1";

    imgTextCena.style.display = "none";
    statsTextCena.style.display = "none";
    infoTextCena.style.display = "block";

    imgBtnCena.classList.remove("img-btn-cena-active");
    statsBtnCena.classList.remove("stats-btn-cena-active");
    infoBtnCena.classList.toggle("info-btn-cena-active");
  }
});

//joel
//img_btn
let imgBtnJoel = document.getElementById("img_btn_joel");
let statsBtnJoel = document.getElementById("stats_btn_joel");
let infoBtnJoel = document.getElementById("info_btn_joel");

let imgTextJoel = document.getElementById("img_text_joel");
let statsTextJoel = document.getElementById("stats_text_joel");
let infoTextJoel = document.getElementById("info_text_joel");

imgBtnJoel.addEventListener("click", function () {
  if (!imgBtnJoel.classList.contains("img-btn-joel-active")) {
    infoBtnJoel.style.opacity = "1";
    statsBtnJoel.style.opacity = "1";
    imgBtnJoel.style.opacity = "0.8";

    imgTextJoel.style.display = "block";
    statsTextJoel.style.display = "none";
    infoTextJoel.style.display = "none";

    statsBtnJoel.classList.remove("stats-btn-joel-active");
    imgBtnJoel.classList.toggle("img-btn-joel-active");
    infoBtnJoel.classList.remove("info-btn-joel-active");
  }
});
//stats_btn
statsBtnJoel.addEventListener("click", function () {
  if (!statsBtnJoel.classList.contains("stats-btn-joel-active")) {
    infoBtnJoel.style.opacity = "1";
    statsBtnJoel.style.opacity = "0.5";
    imgBtnJoel.style.opacity = "1";

    imgTextJoel.style.display = "none";
    statsTextJoel.style.display = "block";
    infoTextJoel.style.display = "none";

    imgBtnJoel.classList.remove("img-btn-joel-active");
    statsBtnJoel.classList.toggle("stats-btn-joel-active");
    infoBtnJoel.classList.remove("info-btn-joel-active");
  }
});
//info_btn
infoBtnJoel.addEventListener("click", function () {
  if (!infoBtnJoel.classList.contains("info-btn-joel-active")) {
    infoBtnJoel.style.opacity = "0.7";
    statsBtnJoel.style.opacity = "1";
    imgBtnJoel.style.opacity = "1";

    imgTextJoel.style.display = "none";
    statsTextJoel.style.display = "none";
    infoTextJoel.style.display = "block";

    imgBtnJoel.classList.remove("img-btn-joel-active");
    statsBtnJoel.classList.remove("stats-btn-joel-active");
    infoBtnJoel.classList.toggle("info-btn-joel-active");
  }
});

//random
//img_btn
let imgBtnRand = document.getElementById("img_btn_rand");
let infoBtnRand = document.getElementById("info_btn_rand");

let imgTextRand = document.getElementById("img_text_rand");
let infoTextRand = document.getElementById("info_text_rand");

imgBtnRand.addEventListener("click", function () {
  if (!imgBtnRand.classList.contains("img-btn-rand-active")) {
    infoBtnRand.style.opacity = "1";
    imgBtnRand.style.opacity = "0.8";

    imgTextRand.style.display = "block";
    infoTextRand.style.display = "none";

    imgBtnRand.classList.toggle("img-btn-rand-active");
    infoBtnRand.classList.remove("info-btn-rand-active");
  }
});
//info_btn
infoBtnRand.addEventListener("click", function () {
  if (!infoBtnRand.classList.contains("info-btn-rand-active")) {
    infoBtnRand.style.opacity = "0.7";
    imgBtnRand.style.opacity = "1";

    imgTextRand.style.display = "none";
    infoTextRand.style.display = "block";

    imgBtnRand.classList.remove("img-btn-rand-active");
    infoBtnRand.classList.toggle("info-btn-rand-active");
  }
});

//---Karten Wahl Funktionen---
//captain jack sparrow
document
  .getElementById("radio_container_sparrow")
  .addEventListener("click", function () {
    if (document.getElementById("hero_radio_sparrow").checked == false) {
      document.getElementById("hero_radio_sparrow").checked = true;
      document.getElementById("check_status_sparrow").innerHTML =
        "<strong>GEWÄHLT</strong>";
      document.getElementById("green_tick_sparrow").style.display = "block";
    } else if (document.getElementById("hero_radio_sparrow").checked == true) {
      document.getElementById("hero_radio_sparrow").checked = false;
      document.getElementById("check_status_sparrow").innerHTML = "WÄHLEN";
      document.getElementById("green_tick_sparrow").style.display = "none";
    }
  });

//john cena
document
  .getElementById("radio_container_cena")
  .addEventListener("click", function () {
    if (document.getElementById("hero_radio_cena").checked == false) {
      document.getElementById("hero_radio_cena").checked = true;
      document.getElementById("check_status_cena").innerHTML =
        "<strong>GEWÄHLT</strong>";
      document.getElementById("green_tick_cena").style.display = "block";
    } else if (document.getElementById("hero_radio_cena").checked == true) {
      document.getElementById("hero_radio_cena").checked = false;
      document.getElementById("check_status_cena").innerHTML = "WÄHLEN";
      document.getElementById("green_tick_cena").style.display = "none";
    }
  });

//joel
document
  .getElementById("radio_container_joel")
  .addEventListener("click", function () {
    if (document.getElementById("hero_radio_joel").checked == false) {
      document.getElementById("hero_radio_joel").checked = true;
      document.getElementById("check_status_joel").innerHTML =
        "<strong>GEWÄHLT</strong>";
      document.getElementById("green_tick_joel").style.display = "block";
    } else if (document.getElementById("hero_radio_joel").checked == true) {
      document.getElementById("hero_radio_joel").checked = false;
      document.getElementById("check_status_joel").innerHTML = "WÄHLEN";
      document.getElementById("green_tick_joel").style.display = "none";
    }
  });

//random
document
  .getElementById("radio_container_rand")
  .addEventListener("click", function () {
    if (document.getElementById("hero_radio_rand").checked == false) {
      document.getElementById("hero_radio_rand").checked = true;
      document.getElementById("check_status_rand").innerHTML =
        "<strong>GEWÄHLT</strong>";
      document.getElementById("green_tick_rand").style.display = "block";
    } else if (document.getElementById("hero_radio_rand").checked == true) {
      document.getElementById("hero_radio_rand").checked = false;
      document.getElementById("check_status_rand").innerHTML = "WÄHLEN";
      document.getElementById("green_tick_rand").style.display = "none";
    }
  });
