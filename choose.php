<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="https://kit.fontawesome.com/e8de1626bb.js" crossorigin="anonymous"></script>
    <script defer src="script.js"></script>
    <title>EpicBattle - Choose</title>
</head>
<body>
    <div class="game_title">EpicBattle</div>

    <div class="epic_title" id="epic_title">Wähle deinen Helden</div>
    <form action="game.php" method="POST">
        <div class="all_heros" id="all_heros">
            <div class="hero_div" id="hero_div_sparrow">
                <div class="hero_info">
                    <div class="hero_text">Captain Sparrow</div>
                    <div class="card_btns">
                        <div id="img_btn_sparrow" class="img_btn"><i class="fa-solid fa-user"></i></div>
                        <img id="stats_btn_sparrow" class="stats_btn" src="bilder/others/swords-crossed4.png" alt="stats-button">
                        <div id="info_btn_sparrow" class="info_btn"><i class="fa-solid fa-circle-info"></i></div>
                    </div>
                </div>
                <div class="img_text_hero" id="img_text_sparrow"><img id="img_sparrow" class="battle_img" src="bilder/heros/sparrow.jfif" alt="captain-jack-sparrow-bild"></div>
                <div class="stats_text_hero" id="stats_text_sparrow"><div class="text_title">Stats</div><div class="title_underline"></div>
                <div class="stat_box">
                    <div class="stat" title="Die Trefferpunkte von Captain Jack Sparrow"><div class="stat_heart stat_icon"><i class="fa-solid fa-heart"></i></div>Gesundheit:</div>
                    <div class="stat_value stat_value_health" id="stat_value_health_sparrow">420HP</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der von Captain Jack Sparrow verursachte Schaden"><div class="stat_damage stat_icon"><i class="fa-solid fa-burst"></i></div>Schaden:</div>
                    <div class="stat_value stat_value_damage" id="stat_value_health_sparrow">30HP</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der Spezial-Angriff von Captain Jack Sparrow"><div class="stat_special stat_icon"><i class="fa-solid fa-star"></i></div>Special Attack:</div>
                    <div class="stat_value stat_value_special" id="stat_value_special_sparrow">Austricksen</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Die Chance, dass Captain Jack Sparrow einen kritischen Treffer landet"><div class="stat_percent stat_icon"><i class="fa-solid fa-percent"></i></div>Crit-Chance:</div>
                    <div class="stat_value stat_value_percent" id="stat_value_special_sparrow">20%</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der Schaden, den Captain Jack Sparrow bei einem kritischen Treffer verursacht"><div class="stat_skull stat_icon"><i class="fa-solid fa-skull"></i></div>Crit-Schaden:</div>
                    <div class="stat_value stat_value_skull" id="stat_value_skull_sparrow">200%</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Die Chance, dass Captain Jack Sparrow einen Angriff abwehrt"><div class="stat_shield stat_icon"><i class="fa-solid fa-shield-halved"></i></div>Block-Chance:</div>
                    <div class="stat_value stat_value_shield" id="stat_value_shield_sparrow">10%</div>
                </div>
                </div>
                <div class="info_text_hero" id="info_text_sparrow"><div class="text_title">Info</div><div class="title_underline"></div><div class="info_text_sentences">Captain Jack Sparrow ist Pirat und meistens Captain der Black Pearl. Er ist sehr eigenartig und immer damit beschäftigt, die Black Pearl zurückzugewinnen. Jack schafft es immer, von einer Gefahr auf ungewöhnlicher Weise unbeschadet zu entkommen, und niemand weiß, ob er alles vorher plant, oder ob er die Dinge einfach so nimmt, wie sie kommen.</div></div>
                <label class="radio_container" id="radio_container_sparrow" for="sparrow">
                    <input class="hero_radio" id="hero_radio_sparrow" type="radio" name="hero" value="sparrow">
                    <div class="new_hero_radio" id="new_radio_sparrow">
                        <span class="check_status" id="check_status_sparrow">WÄHLEN</span>
                        <div class="green_tick" id="green_tick_sparrow"><i class="fa-solid fa-check"></i></div>
                    </div>
                </label>
            </div>

            <div class="hero_div" id="hero_div_cena">
                <div class="hero_info">
                    <div class="hero_text">John Cena</div>
                    <div class="card_btns">
                        <div id="img_btn_cena" class="img_btn"><i class="fa-solid fa-user"></i></div>
                        <img id="stats_btn_cena" class="stats_btn" src="bilder/others/swords-crossed4.png" alt="stats-button">
                        <div id="info_btn_cena" class="info_btn"><i class="fa-solid fa-circle-info"></i></div>
                    </div>
                </div>
                <div class="img_text_hero" id="img_text_cena"><img id="img_cena" class="battle_img" src="bilder/heros/cena.jfif" alt="john-cena-bild"></div>
                <div class="stats_text_hero" id="stats_text_cena"><div class="text_title">Stats</div><div class="title_underline"></div>
                <div class="stat_box">
                    <div class="stat" title="Die Trefferpunkte von John Cena"><div class="stat_heart stat_icon"><i class="fa-solid fa-heart"></i></div>Gesundheit:</div>
                    <div class="stat_value stat_value_health" id="stat_value_health_cena">600HP</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der von John Cena verursachte Schaden"><div class="stat_damage stat_icon"><i class="fa-solid fa-burst"></i></div>Schaden:</div>
                    <div class="stat_value stat_value_damage" id="stat_value_health_cena">20HP</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der Spezial-Angriff von John Cena"><div class="stat_special stat_icon"><i class="fa-solid fa-star"></i></div>Special Attack:</div>
                    <div class="stat_value stat_value_special" id="stat_value_special_cena">STF</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Die Chance, dass John Cena einen kritischen Treffer landet"><div class="stat_percent stat_icon"><i class="fa-solid fa-percent"></i></div>Crit-Chance:</div>
                    <div class="stat_value stat_value_percent" id="stat_value_special_cena">17%</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der Schaden, den John Cena bei einem kritischen Treffer verursacht"><div class="stat_skull stat_icon"><i class="fa-solid fa-skull"></i></div>Crit-Schaden:</div>
                    <div class="stat_value stat_value_skull" id="stat_value_skull_cena">200%</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Die Chance, dass John Cena einen Angriff abwehrt"><div class="stat_shield stat_icon"><i class="fa-solid fa-shield-halved"></i></div>Block-Chance:</div>
                    <div class="stat_value stat_value_shield" id="stat_value_shield_cena">10%</div>
                </div>
                </div>
                <div class="info_text_hero" id="info_text_cena"><div class="text_title">Info</div><div class="title_underline"></div><div class="info_text_sentences">John Felix Anthony Cena ist am 23. April 1977 geboren und ein US-amerikanischer Wrestler und Schauspieler. Er tritt in den Shows von WWE auf, hielt sechzehnmal einen Weltschwergewichts-Titel und ist damit zusammen mit Ric Flair Rekordhalter.</div></div>
                <label class="radio_container" id="radio_container_cena" for="cena">
                    <input class="hero_radio" id="hero_radio_cena" type="radio" name="hero" value="cena">
                    <div class="new_hero_radio" id="new_radio_cena">
                        <span class="check_status" id="check_status_cena">WÄHLEN</span>
                        <div class="green_tick" id="green_tick_cena"><i class="fa-solid fa-check"></i></div>
                    </div>
                </label>
            </div>

            <div class="hero_div" id="hero_div_joel">
                <div class="hero_info">
                    <div class="hero_text">Joel Miller</div>
                    <div class="card_btns">
                        <div id="img_btn_joel" class="img_btn"><i class="fa-solid fa-user"></i></div>
                        <img id="stats_btn_joel" class="stats_btn" src="bilder/others/swords-crossed4.png" alt="stats-button">
                        <div id="info_btn_joel" class="info_btn"><i class="fa-solid fa-circle-info"></i></div>
                    </div>
                </div>
                <div class="img_text_hero" id="img_text_joel"><img id="img_joel" class="battle_img" src="bilder/heros/joel.jpg" alt="joel-miller-bild"></div>
                <div class="stats_text_hero" id="stats_text_joel"><div class="text_title">Stats</div><div class="title_underline"></div>
                <div class="stat_box">
                    <div class="stat" title="Die Trefferpunkte von Joel Miller"><div class="stat_heart stat_icon"><i class="fa-solid fa-heart"></i></div>Gesundheit:</div>
                    <div class="stat_value stat_value_health" id="stat_value_health_joel">420HP</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der von Joel Miller verursachte Schaden"><div class="stat_damage stat_icon"><i class="fa-solid fa-burst"></i></div>Schaden:</div>
                    <div class="stat_value stat_value_damage" id="stat_value_health_joel">20HP</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der Spezial-Angriff von Joel Miller"><div class="stat_special stat_icon"><i class="fa-solid fa-star"></i></div>Special Attack:</div>
                    <div class="stat_value stat_value_special" id="stat_value_special_joel">STF</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Die Chance, dass Joel Miller einen kritischen Treffer landet"><div class="stat_percent stat_icon"><i class="fa-solid fa-percent"></i></div>Crit-Chance:</div>
                    <div class="stat_value stat_value_percent" id="stat_value_special_joel">17%</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Der Schaden, den Joel Miller bei einem kritischen Treffer verursacht"><div class="stat_skull stat_icon"><i class="fa-solid fa-skull"></i></div>Crit-Schaden:</div>
                    <div class="stat_value stat_value_skull" id="stat_value_skull_joel">200%</div>
                </div>
                <div class="stat_box">
                    <div class="stat" title="Die Chance, dass Joel Miller einen Angriff abwehrt"><div class="stat_shield stat_icon"><i class="fa-solid fa-shield-halved"></i></div>Block-Chance:</div>
                    <div class="stat_value stat_value_shield" id="stat_value_shield_joel">10%</div>
                </div>
                </div>
                <div class="info_text_hero" id="info_text_joel"><div class="text_title">Info</div><div class="title_underline"></div><div class="info_text_sentences">Joel Miller ist der spielbare Protagonist aus The Last of Us. Er ist ein Überlebender, den die verheerenden Auswirkungen der Epidemie durch den Cordyceps-Pilz abgehärtet haben. Er hat Freunde, Familie und alles andere für ihn wichtige verloren und versucht, mit seinem neuen Leben fertig zu werden.</div></div>
                <label class="radio_container" id="radio_container_joel" for="joel">
                    <input class="hero_radio" id="hero_radio_joel" type="radio" name="hero" value="joel">
                    <div class="new_hero_radio" id="new_radio_joel">
                        <span class="check_status" id="check_status_joel">WÄHLEN</span>
                        <div class="green_tick" id="green_tick_joel"><i class="fa-solid fa-check"></i></div>
                    </div>
                </label>
            </div>

            <div class="hero_div" id="hero_div_rand">
                <div class="hero_info">
                    <div class="hero_text">Zufällig</div>
                    <div class="card_btns">
                        <div id="img_btn_rand" class="img_btn"><i class="fa-solid fa-user"></i></div>
                        <div id="info_btn_rand" class="info_btn"><i class="fa-solid fa-circle-info"></i></div>
                    </div>
                </div>
                <div class="img_text_hero" id="img_text_rand"><img id="img_rand" class="battle_img" src="bilder/heros/rand3.png" alt="zufällig-bild"></div>
                <div class="info_text_hero" id="info_text_rand"><div class="text_title">Info</div><div class="title_underline"></div><div class="info_text_sentences">Bei Wahl dieser Karte wird ein zufälliger Held für dich auserwählt, in den Kampf geschickt zu werden.</div></div>
                <label class="radio_container" id="radio_container_rand" for="rand">
                    <input class="hero_radio" id="hero_radio_rand" type="radio" name="hero" value="rand">
                    <div class="new_hero_radio" id="new_radio_rand">
                        <span class="check_status" id="check_status_rand">WÄHLEN</span>
                        <div class="green_tick" id="green_tick_rand"><i class="fa-solid fa-check"></i></div>
                    </div>
                </label>
            </div><br><br>
        </div>

        <div onclick="toWeapons()" class="continue_btn" id="continue_btn_heros">WEITER<div class="continue_arrow" id="continue_arrow_heros"><i class="fa-solid fa-arrow-right"></i></div></div>
            
        <div class="all_weapons" id="all_weapons">
            <div class="weapon_div">
                <label for="sword">
                    <div class="weapon_info">
                        <div class="weapon_text">Diamant-Schwert</div>
                        <div class="card_btns">
                            <div class="img_btn"><i class="fa-solid fa-wand-sparkles"></i></div>
                            <div class="stats_btn" alt="stats-button"><i class="fa-solid fa-circle-up"></i></div>
                            <div class="info_btn" id="info_sword"><i class="fa-solid fa-circle-info"></i></div>
                        </div>
                    </div>
                    <div id="info_text_sword">Diamantschwert aus Minecraft<br>Gesundheit: <br>Schaden: <br>Special-Attack: Anschleichen</div>
                    <img id="img_sword" class="battle_img" src="bilder/weapons/sword2.jfif" alt="sword-bild">
                </label>
                <input type="radio" name="weapon" value="sword" id="sword_input">
            </div>
        </div><br><br>

        <div onclick="toPets()" class="continue_btn" id="continue_btn_weapons">WEITER<div class="continue_arrow" id="continue_arrow_weapons"><i class="fa-solid fa-arrow-right"></i></div></div>

        <div class="all_pets" id="all_pets">
            <div class="pet_div">
                <label for="katze    ">
                    <div class="weapon_info">
                        <div class="weapon_text">Diamant-Schwert</div>
                        <div class="card_btns">
                            <div class="img_btn"><i class="fa-solid fa-wand-sparkles"></i></div>
                            <div class="stats_btn" alt="stats-button"><i class="fa-solid fa-circle-up"></i></div>
                            <div class="info_btn" id="info_sword"><i class="fa-solid fa-circle-info"></i></div>
                        </div>
                    </div>
                    <div id="info_text_sword">Diamantschwert aus Minecraft<br>Gesundheit: <br>Schaden: <br>Special-Attack: Anschleichen</div>
                    <img id="img_sword" class="battle_img" src="bilder/weapons/" alt="sword-bild">
                </label>
                <input type="radio" name="weapon" value="sword" id="sword_input">
            </div>
        </div>

        <div onclick="toShips()" class="continue_btn" id="continue_btn_pets">WEITER<div class="continue_arrow" id="continue_arrow_pets"><i class="fa-solid fa-arrow-right"></i></div></div>

        <div class="all_ships" id="all_ships">ships</div>

        <div onclick="toSpells()" class="continue_btn" id="continue_btn_ships">WEITER<div class="continue_arrow" id="continue_arrow_pets"><i class="fa-solid fa-arrow-right"></i></div></div>

        <div class="all_spells" id="all_spells">spells</div>

        <div onclick="toItems()" class="continue_btn" id="continue_btn_spells">WEITER<div class="continue_arrow" id="continue_arrow_spells"><i class="fa-solid fa-arrow-right"></i></div></div>

        <div class="all_items" id="all_items">items</div>

        <div onclick="toOverwiev()" class="continue_btn" id="continue_btn_items">WEITER<div class="continue_arrow" id="continue_arrow_items"><i class="fa-solid fa-arrow-right"></i></div></div>
        <!-- gewählte Sachen anzeigen -->
    </form>
</body>
</html>