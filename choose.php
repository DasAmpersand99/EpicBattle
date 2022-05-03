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
        <?php include_once 'all-heroes.php' ?>

        <div onclick="toWeapons()" class="continue_btn" id="continue_btn_heros">WEITER<div class="continue_arrow" id="continue_arrow_heros"><i class="fa-solid fa-arrow-right"></i></div>
        </div>

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

        <div onclick="toPets()" class="continue_btn" id="continue_btn_weapons">WEITER<div class="continue_arrow" id="continue_arrow_weapons"><i class="fa-solid fa-arrow-right"></i></div>
        </div>

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

        <div onclick="toShips()" class="continue_btn" id="continue_btn_pets">WEITER<div class="continue_arrow" id="continue_arrow_pets"><i class="fa-solid fa-arrow-right"></i></div>
        </div>

        <div class="all_ships" id="all_ships">ships</div>

        <div onclick="toSpells()" class="continue_btn" id="continue_btn_ships">WEITER<div class="continue_arrow" id="continue_arrow_pets"><i class="fa-solid fa-arrow-right"></i></div>
        </div>

        <div class="all_spells" id="all_spells">spells</div>

        <div onclick="toItems()" class="continue_btn" id="continue_btn_spells">WEITER<div class="continue_arrow" id="continue_arrow_spells"><i class="fa-solid fa-arrow-right"></i></div>
        </div>

        <div class="all_items" id="all_items">items</div>

        <div onclick="toOverwiev()" class="continue_btn" id="continue_btn_items">WEITER<div class="continue_arrow" id="continue_arrow_items"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
        <!-- gewählte Sachen anzeigen -->
    </form>
</body>

</html>