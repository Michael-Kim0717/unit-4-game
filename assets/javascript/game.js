/* TODO:
    Balancing
    Changed attack function if your character faints at the same time as the enemy. -- 
*/

$(document).ready(function(){

    /* Variables for 'Attacker' and 'Defender' */
    var attacker = {
        name: "",
        health: 0,
        attack: 0,
        bAttack: 0
    };

    var defender = {
        name: "",
        health: 0,
        attack: 0,
        cAttack: 0
    };

    /* Random values for all Pokemon starters on start. */
    
    var bulbHP = Math.floor(Math.random() * 11) + 100;
    var bulbBA = Math.floor(Math.random() * 4) + 3;
    var bulbCA = Math.floor(Math.random() * 4) + 13;
    $("#bulbHP").text("Health: " + bulbHP);
    $("#bulbBA").text("Base Attack: " + bulbBA);
    $("#bulbCA").text("Counter Attack: " + bulbCA);
    
    var charHP = Math.floor(Math.random() * 11) + 90;
    var charBA = Math.floor(Math.random() * 4) + 3;
    var charCA = Math.floor(Math.random() * 4) + 16;
    $("#charHP").text("Health: " + charHP);
    $("#charBA").text("Base Attack: " + charBA);
    $("#charCA").text("Counter Attack: " + charCA);
    
    var squirtHP = Math.floor(Math.random() * 11) + 120;
    var squirtBA = Math.floor(Math.random() * 3) + 2;
    var squirtCA = Math.floor(Math.random() * 4) + 10;
    $("#squirtHP").text("Health: " + squirtHP);
    $("#squirtBA").text("Base Attack: " + squirtBA);
    $("#squirtCA").text("Counter Attack: " + squirtCA);

    var pikaHP = Math.floor(Math.random() * 11) + 80;
    var pikaBA = Math.floor(Math.random() * 4) + 5;
    var pikaCA = Math.floor(Math.random() * 4) + 17;
    $("#pikaHP").text("Health: " + pikaHP);
    $("#pikaBA").text("Base Attack: " + pikaBA);
    $("#pikaCA").text("Counter Attack: " + pikaCA);

    /* Variable to determine winner */
    var defenderCounter = 0;

    /* Variables for HP */
    var 
        attackerBar = $("#lHPBar");
        defenderBar = $("#rHPBar");
        a_Total_Bar = attackerBar.find("#a-total-bar");
        a_Hit_Bar = attackerBar.find("#a-hit-bar");
        d_Total_Bar = defenderBar.find("#d-total-bar");
        d_Hit_Bar = defenderBar.find("#d-hit-bar");

    /* Array of defeated opponents to check valid choices for opponents */
    var defeatedOpponents = [];

    /* Apply following to the modal on win or on loss */
    var onWinClose = document.getElementById("closeWin");             
    var onLossClose = document.getElementById("closeLose");
    
    var onWinModal = document.getElementById("onWin");
    var onLossModal = document.getElementById("onLose");

    // When the first card is selected,
    // If there is no attacker, Bulbasaur will become our attacker,
    // Else, if there is no defender, Bulbasaur will become our defender.
    // Also sets images where applicable.
    $("#c1").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Bulbasaur",
                health: bulbHP,
                attack: bulbBA,
                bAttack: bulbBA
            }

            attackerBar.data('total', bulbHP);
            attackerBar.data('value', bulbHP);

            $("#lHPIndicator").append(attacker.health + " / " + attacker.health);
            $("#lATKIndicator").append(attacker.attack);

            $("#c1").css("background-color", "#FBA5A5");
            $("#lSprite").attr("src", "./assets/images/bulbasaur.gif");
            $("#lSprite").addClass("flipped");

            $("#logLG").prepend("You have chosen Bulbasaur! <br>");
            $("#logElse").prepend("You have chosen Bulbasaur! <br>");
        }
        else if (defender.attack == 0 && attacker.name != "Bulbasaur" && !defeatedOpponents.includes("Bulbasaur")){
            defender = {
                name: "Bulbasaur",
                health: bulbHP,
                attack: bulbBA,
                cAttack: bulbCA
            }
            defenderBar.data('total', bulbHP);
            defenderBar.data('value', bulbHP);

            $("#rHPIndicator").text("Health: " + defender.health + " / " + defender.health);
            $("#rATKIndicator").text("Attack : " + defender.cAttack);
                
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');
            
            $("#c1").css("background-color", "#FBA5A5");
            $("#rSprite").attr("src", "./assets/images/bulbasaur.gif");

            $("#logLG").prepend("Your opponent will be Bulbasaur! <br>");
            $("#logElse").prepend("Your opponent will be Bulbasaur! <br>");
        }
    });

    // When the second card is selected,
    // If there is no attacker, Charmander will become our attacker,
    // Else, if there is no defender, Charmander will become our defender.
    // Also sets images where applicable.
    $("#c2").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Charmander",
                health: charHP,
                attack: charBA,
                bAttack: charBA
            }
            attackerBar.data('total', charHP);
            attackerBar.data('value', charHP);

            $("#lHPIndicator").append(attacker.health + " / " + attacker.health);
            $("#lATKIndicator").append(attacker.attack);

            $("#c2").css("background-color", "#FBA5A5");
            $("#lSprite").attr("src", "./assets/images/charmander.gif");
            $("#lSprite").addClass("flipped");
            
            $("#logLG").prepend("You have chosen Charmander! <br>");
            $("#logElse").prepend("You have chosen Charmander! <br>");
        }
        else if (defender.attack == 0 && attacker.name != "Charmander" && !defeatedOpponents.includes("Charmander")){
            var healthRandom = Math.floor(Math.random() * 11) + 70;
            var attackRandom = Math.floor(Math.random() * 4) + 3;
            var cAttackRandom = Math.floor(Math.random() * 4) + 18;

            defender = {
                name: "Charmander",
                health: charHP,
                attack: charBA,
                cAttack: charCA
            }
            defenderBar.data('total', charHP);
            defenderBar.data('value', charHP);
            
            $("#rHPIndicator").text("Health: " + defender.health + " / " + defender.health);
            $("#rATKIndicator").text("Attack : " + defender.cAttack);
            
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');

            $("#c2").css("background-color", "#FBA5A5");
            $("#rSprite").attr("src", "./assets/images/charmander.gif");

            $("#logLG").prepend("Your opponent will be Charmander! <br>");
            $("#logElse").prepend("Your opponent will be Charmander! <br>");
        }
    });

    // When the third card is selected,
    // If there is no attacker, Squirtle will become our attacker,
    // Else, if there is no defender, Squirtle will become our defender.
    // Also sets images where applicable.
    $("#c3").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Squirtle",
                health: squirtHP,
                attack: squirtBA,
                bAttack: squirtBA
            }
            attackerBar.data('total', squirtHP);
            attackerBar.data('value', squirtHP);
            
            $("#lHPIndicator").append(attacker.health + " / " + attacker.health);
            $("#lATKIndicator").append(attacker.attack);

            $("#c3").css("background-color", "#FBA5A5");
            $("#lSprite").attr("src", "./assets/images/squirtle.gif");
            $("#lSprite").addClass("flipped");
            
            $("#logLG").prepend("You have chosen Squirtle! <br>");
            $("#logElse").prepend("You have chosen Squirtle! <br>");
        } 
        else if (defender.attack == 0 && attacker.name != "Squirtle" && !defeatedOpponents.includes("Squirtle")){
            var healthRandom = Math.floor(Math.random() * 11) + 100;
            var attackRandom = Math.floor(Math.random() * 3) + 2;
            var cAttackRandom = Math.floor(Math.random() * 4) + 12;

            defender = {
                name: "Squirtle",
                health: squirtHP,
                attack: squirtBA,
                cAttack: squirtCA
            }
            defenderBar.data('total', squirtHP);
            defenderBar.data('value', squirtHP);

            $("#rHPIndicator").text("Health: " + defender.health + " / " + defender.health);
            $("#rATKIndicator").text("Attack : " + defender.cAttack);
            
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');

            $("#c3").css("background-color", "#FBA5A5");
            $("#rSprite").attr("src", "./assets/images/squirtle.gif");
            
            $("#logLG").prepend("Your opponent will be Squirtle! <br>");
            $("#logElse").prepend("Your opponent will be Squirtle! <br>");
        }
    });

    // When the last card is selected,
    // If there is no attacker, Pikachu will become our attacker,
    // Else, if there is no defender, Pikachu will become our defender.
    // Also sets images where applicable.
    $("#c4").on("click", function(){
        if (attacker.attack == 0){ 
            attacker = {
                name: "Pikachu",
                health: pikaHP,
                attack: pikaBA,
                bAttack: pikaBA
            }
            attackerBar.data('total', pikaHP);
            attackerBar.data('value', pikaHP);

            $("#lHPIndicator").append(attacker.health + " / " + attacker.health);
            $("#lATKIndicator").append(attacker.attack);
            
            $("#c4").css("background-color", "#FBA5A5");
            $("#lSprite").attr("src", "./assets/images/pikachu.gif");
            $("#lSprite").addClass("flipped");
            
            $("#logLG").prepend("You have chosen Pikachu! <br>");
            $("#logElse").prepend("You have chosen Pikachu! <br>");
        }
        else if (defender.attack == 0 && attacker.name != "Pikachu" && !defeatedOpponents.includes("Pikachu")){
            defender = {
                name: "Pikachu",
                health: pikaHP,
                attack: pikaBA,
                cAttack: pikaCA
            }
            defenderBar.data('total', pikaHP);
            defenderBar.data('value', pikaHP);

            $("#rHPIndicator").text("Health: " + defender.health + " / " + defender.health);
            $("#rATKIndicator").text("Attack : " + defender.cAttack);
            
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');
            
            $("#c4").css("background-color", "#FBA5A5");
            $("#rSprite").attr("src", "./assets/images/pikachu.gif");
            
            $("#logLG").prepend("Your opponent will be Pikachu! <br>");
            $("#logElse").prepend("Your opponent will be Pikachu! <br>");
        }
    });

    // When the 'Attack' button is pressed,
    // * Create an error if there is no attacker or defender *
    // Damage the defender by the attacker's attack value and increase the attacker's attack value by the base value.
    // Damage the attacker by the defender's counter attack value.

    $("#attack").on("click", function(){

        var 
            aTotal = attackerBar.data('total'),
            aValue = attackerBar.data('value'),

            dTotal = defenderBar.data('total'),
            dValue = defenderBar.data('value');

        // If both attacker and defender slots are populated,
        // Change attacker's and defender's health bar.
        if (attacker.attack != 0 && defender.attack != 0){
            var aDamage = attacker.attack;
            var dHP = dValue - aDamage;
            var dBarWidth = (dHP / dTotal) * 100;
            var dHitWidth = (aDamage / dValue) * 100 + "%";
            if ((aDamage / dValue) > dBarWidth){
                dHitWidth = dBarWidth + "%";
            }
            
            if (dHP < 0){
                dHP = 0;
            }
            $("#rHPIndicator").text("Health: " + dHP + " / " + dTotal);

            defender.health -= attacker.attack;
            attacker.attack += attacker.bAttack;

            if (dHP != 0){
                var dDamage = defender.cAttack;
                var aHP = aValue - dDamage;
                var aBarWidth = (aHP / aTotal) * 100;
                var aHitWidth = (dDamage / aValue) * 100 + "%";
                if ((dDamage / aValue) > aBarWidth){
                    aHitWidth = aBarWidth + "%";
                }

                if (aHP < 0){
                    aHP = 0;
                }
                $("#lHPIndicator").text("Health: " + aHP + " / " + aTotal);
                
                attacker.health -= defender.cAttack;
            }

            a_Hit_Bar.css('width', aHitWidth);
            attackerBar.data('value', aHP);

            d_Hit_Bar.css('width', dHitWidth);
            defenderBar.data('value', dHP);

            setTimeout(function(){
                a_Hit_Bar.css({'width': '0'});
                a_Total_Bar.css('width', aBarWidth + "%");
                
                d_Hit_Bar.css({'width': '0'});
                d_Total_Bar.css('width', dBarWidth + "%");
            }, 500);

            $("#logLG").prepend(
                defender.name + " takes " + attacker.attack + " damage. <br>" +
                defender.name + " retaliates and deals " + defender.cAttack + " damage to " + attacker.name + ". <br>");

            $("#logElse").prepend(
                defender.name + " takes " + attacker.attack + " damage. <br>" +
                defender.name + " retaliates and deals " + defender.cAttack + " damage to " + attacker.name + ". <br>");

            $("#lATKIndicator").text("Attack: " + attacker.attack);

            if (attacker.health <= 0){
                onLossModal.style.display = "block";
            }
            else if (defender.health <= 0){
                $("#logLG").prepend(defender.name + " has fainted. <br>");
                $("#logElse").prepend(defender.name + " has fainted. <br>");
                
                defeatedOpponents.push(defender.name);
                $('#rSprite').attr("src", "#");
                defender.attack = 0;
                defenderCounter++;
            }
        }

        if (defenderCounter == 3){
            onWinModal.style.display = "block";
        }
    });

    onLossClose.onclick = function(){
        onLossModal.style.display = "none";
    };

    onWinClose.onclick = function(){
        onWinModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == onLossModal || event.target == onWinModal) {
            onLossModal.style.display = "none";
            onWinModal.style.display = "none";
        }
    }
    
});