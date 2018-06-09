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

    /* Variable to determine winner */
    var defenderCounter = 0;

    /* Variables for HP */
    var 
        attackerBar = $("#attackerHP");
        defenderBar = $("#defenderHP");
        a_Total_Bar = attackerBar.find("#a-total-bar");
        a_Hit_Bar = attackerBar.find("#a-hit-bar");
        d_Total_Bar = defenderBar.find("#d-total-bar");
        d_Hit_Bar = defenderBar.find("#d-hit-bar");

    /* Array of defeated opponents to check valid choices for opponents */
    var defeatedOpponents = [];

    /* Make the log chat as tall as the arena height. */
    $("#log").height($(".arena").height() - 25);

    // When the first card is selected,
    // If there is no attacker, Bulbasaur will become our attacker,
    // Else, if there is no defender, Bulbasaur will become our defender.
    // Also sets images where applicable.
    $("#c1").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Bulbasaur",
                health: 75,
                attack: 22,
                bAttack: 22
            }

            attackerBar.data('total', 75);
            attackerBar.data('value', 75);

            $("#healthCounterA").append(attacker.health + " / " + attacker.health);
            $("#attackCounterA").append(attacker.attack);

            $("#c1").css("background-color", "#FBA5A5");
            $("#attackerArea").attr("src", "./assets/images/bulbasaur.gif");
            $("#attackerArea").addClass("flipped");

            $("#log").append("You have chosen Bulbasaur! <br>");
        }
        else if (defender.attack == 0 && attacker.name != "Bulbasaur" && !defeatedOpponents.includes("Bulbasaur")){
            defender = {
                name: "Bulbasaur",
                health: 75,
                attack: 22,
                cAttack: 3
            }
            defenderBar.data('total', 75);
            defenderBar.data('value', 75);

            $("#healthCounterD").text("Health: " + defender.health + " / " + defender.health);
            $("#attackCounterD").text("Attack : " + defender.cAttack);
                
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');
            
            $("#c1").css("background-color", "#FBA5A5");
            $("#defenderArea").attr("src", "./assets/images/bulbasaur.gif");

            $("#log").append("Your opponent will be Bulbasaur! <br>");
        }
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    // When the second card is selected,
    // If there is no attacker, Charmander will become our attacker,
    // Else, if there is no defender, Charmander will become our defender.
    // Also sets images where applicable.
    $("#c2").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Charmander",
                health: 50,
                attack: 27,
                bAttack: 27
            }
            attackerBar.data('total', 50);
            attackerBar.data('value', 50);

            $("#healthCounterA").append(attacker.health + " / " + attacker.health);
            $("#attackCounterA").append(attacker.attack);

            $("#c2").css("background-color", "#FBA5A5");
            $("#attackerArea").attr("src", "./assets/images/charmander.gif");
            $("#attackerArea").addClass("flipped");
            
            $("#log").append("You have chosen Charmander! <br>");
        }
        else if (defender.attack == 0 && attacker.name != "Charmander" && !defeatedOpponents.includes("Charmander")){
            defender = {
                name: "Charmander",
                health: 50,
                attack: 27,
                cAttack: 6
            }
            defenderBar.data('total', 50);
            defenderBar.data('value', 50);
            
            $("#healthCounterD").text("Health: " + defender.health + " / " + defender.health);
            $("#attackCounterD").text("Attack : " + defender.cAttack);
            
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');

            $("#c2").css("background-color", "#FBA5A5");
            $("#defenderArea").attr("src", "./assets/images/charmander.gif");

            $("#log").append("Your opponent will be Charmander! <br>");
        }
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    // When the third card is selected,
    // If there is no attacker, Squirtle will become our attacker,
    // Else, if there is no defender, Squirtle will become our defender.
    // Also sets images where applicable.
    $("#c3").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Squirtle",
                health: 100,
                attack: 18,
                bAttack: 18
            }
            attackerBar.data('total', 100);
            attackerBar.data('value', 100);
            
            $("#healthCounterA").append(attacker.health + " / " + attacker.health);
            $("#attackCounterA").append(attacker.attack);

            $("#c3").css("background-color", "#FBA5A5");
            $("#attackerArea").attr("src", "./assets/images/squirtle.gif");
            $("#attackerArea").addClass("flipped");
            
            $("#log").append("You have chosen Squirtle! <br>");
        } 
        else if (defender.attack == 0 && attacker.name != "Squirtle" && !defeatedOpponents.includes("Squirtle")){
            defender = {
                name: "Squirtle",
                health: 100,
                attack: 18,
                cAttack: 2
            }
            defenderBar.data('total', 100);
            defenderBar.data('value', 100);

            $("#healthCounterD").text("Health: " + defender.health + " / " + defender.health);
            $("#attackCounterD").text("Attack : " + defender.cAttack);
            
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');

            $("#c3").css("background-color", "#FBA5A5");
            $("#defenderArea").attr("src", "./assets/images/squirtle.gif");
            
            $("#log").append("Your opponent will be Squirtle! <br>");
        } 
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    // When the last card is selected,
    // If there is no attacker, Pikachu will become our attacker,
    // Else, if there is no defender, Pikachu will become our defender.
    // Also sets images where applicable.
    $("#c4").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Pikachu",
                health: 44,
                attack: 31,
                bAttack: 31
            }
            attackerBar.data('total', 44);
            attackerBar.data('value', 44);

            $("#healthCounterA").append(attacker.health + " / " + attacker.health);
            $("#attackCounterA").append(attacker.attack);
            
            $("#c4").css("background-color", "#FBA5A5");
            $("#attackerArea").attr("src", "./assets/images/pikachu.gif");
            $("#attackerArea").addClass("flipped");
            
            $("#log").append("You have chosen Pikachu! <br>");
        }
        else if (defender.attack == 0 && attacker.name != "Pikachu" && !defeatedOpponents.includes("Pikachu")){
            defender = {
                name: "Pikachu",
                health: 44,
                attack: 31,
                cAttack: 5
            }
            defenderBar.data('total', 44);
            defenderBar.data('value', 44);

            $("#healthCounterD").text("Health: " + defender.health + " / " + defender.health);
            $("#attackCounterD").text("Attack : " + defender.cAttack);
            
            d_Hit_Bar.css({'width': '0'});
            d_Total_Bar.css('width', '100%');
            
            $("#c4").css("background-color", "#FBA5A5");
            $("#defenderArea").attr("src", "./assets/images/pikachu.gif");
            
            $("#log").append("Your opponent will be Pikachu! <br>");
        }
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
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

        // Change attacker's and defender's health bar.
        if (attacker.attack != 0 && defender.attack != 0){
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
            $("#healthCounterA").text("Health: " + aHP + " / " + aTotal);

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
            $("#healthCounterD").text("Health: " + dHP + " / " + dTotal);

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

            defender.health -= attacker.attack;
            attacker.health -= defender.cAttack;
            attacker.attack += attacker.bAttack;
            
            $("#attackCounterA").text("Attack: " + attacker.attack);

            console.log(attacker.name + " now has " + attacker.health);
            console.log(defender.name + " now has " + defender.health);
        }

        if (attacker.health <= 0){
            alert("You lose!");
        }
        else if (defender.health <= 0){
            alert(defender.name + " fainted!");
            $('#defenderArea').attr("src", "#");
            defender.attack = 0;
            defenderCounter++;
        }

        if (defenderCounter == 3){
            alert("You win!");
        }
    });

});