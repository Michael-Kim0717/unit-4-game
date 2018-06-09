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

    $("#c1").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Bulbasaur",
                health: 75,
                attack: 22,
                bAttack: 22
            }
            $("#c1").css("background-color", "#FBA5A5");
        }
        else if (defender.attack == 0){
            defender = {
                name: "Bulbasaur",
                health: 75,
                attack: 22,
                cAttack: 3
            }
            $("#c1").css("background-color", "#FBA5A5");
        }
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    $("#c2").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Charmander",
                health: 50,
                attack: 27,
                bAttack: 27
            }
            $("#c2").css("background-color", "#FBA5A5");
        }
        else if (defender.attack == 0){
            defender = {
                name: "Charmander",
                health: 50,
                attack: 27,
                cAttack: 6
            }
            $("#c2").css("background-color", "#FBA5A5");
        }
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    $("#c3").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Squirtle",
                health: 100,
                attack: 18,
                bAttack: 18
            }
            $("#c3").css("background-color", "#FBA5A5");
        } 
        else if (defender.attack == 0){
            defender = {
                name: "Squirtle",
                health: 100,
                attack: 18,
                cAttack: 2
            }
            $("#c3").css("background-color", "#FBA5A5");
        } 
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    $("#c4").on("click", function(){
        if (attacker.attack == 0){
            attacker = {
                name: "Pikachu",
                health: 44,
                attack: 31,
                bAttack: 31
            }
            $("#c4").css("background-color", "#FBA5A5");
        }
        else if (defender.attack == 0){
            defender = {
                name: "Pikachu",
                health: 44,
                attack: 31,
                cAttack: 5
            }
            $("#c4").css("background-color", "#FBA5A5");
        }
        console.log(attacker.name + ", " + attacker.health + ", " + attacker.attack + ", " + attacker.bAttack);
        console.log(defender.name + ", " + defender.health + ", " + defender.attack + ", " + defender.cAttack);
    });

    $("#attack").on("click", function(){
        if (attacker.attack != 0 && defender.attack != 0){
            defender.health -= attacker.attack;
            attacker.health -= defender.cAttack;
            attacker.attack += attacker.bAttack;
            console.log(attacker.name + " now has " + attacker.health);
            console.log(defender.name + " now has " + defender.health);
        }

        if (attacker.health == 0){
            alert("You lose!");
        }
        else if (defender.health <= 0){
            alert(defender.name + " fainted!");
            defender.attack = 0;
            defenderCounter++;
        }

        if (defenderCounter == 3){
            alert("You win!");
        }
    });

});