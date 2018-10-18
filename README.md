# Pokemon RPG

https://michael-kim0717.github.io/unit-4-game/

![battle-screen](https://user-images.githubusercontent.com/8729300/47174286-2f200380-d2de-11e8-985f-b0fb69d2c592.png)

This Pokemon RPG has a very similar style to Pokemon games that were originally played on handheld consoles.

### GETTING STARTED

#### BUILT-WITH

```
  
  Languages :
  
  HTML / CSS / Bootstrap
  Javascript
  JQuery

```

##### SAMPLE DATA

```javascript

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
  
  /*
  
    Bulbasaur : neutral stats, but leaned more towards health than attack
      Health : 95 - 105
      Attack : 5 - 7
      CAttack : 13 - 15
      
    Charmander : neutral stats, but leaned more towards attack than health
      Health : 80 - 90
      Attack : 6 - 8
      CAttack : 16 - 18
  
    Squirtle : usually had the highest health, but lowest attack
      Health : 125 - 135
      Attack : 3 - 5
      CAttack : 10 - 12
      
    Pikachu : usually had the highest attack, but lowest health
      Health : 65 - 75
      Attack : 7 - 9
      CAttack : 19 - 21
      
  */

```

### WEBSITE / IMAGES

#### CHARACTER SELECTION

In this RPG, you have four set choices of Pokemon.
During each game, the stats for each Pokemon are varied and random, but lie within a certain range.
You begin the game by picking your starter Pokemon, which will be your Pokemon for the rest of the game.

![selection-screen](https://user-images.githubusercontent.com/8729300/47174289-30e9c700-d2de-11e8-863c-3bbd63c1f119.png)

#### BATTLE SCREEN

Whenever you press the attack button, you will deal your attack value to the enemy's health and will be dealt the enemy's counter attack value to your health.
Your character will increase its attack by its base attack value upon attacking.

![battle-screen](https://user-images.githubusercontent.com/8729300/47174286-2f200380-d2de-11e8-985f-b0fb69d2c592.png)

#### RESULTS SCREEN

During the course of this game, you will only win if all three remaining Pokemon are defeated.

##### Strategy

Each character is unique in their own way.
For example, Squirtle has the highest health out of all the characters, but the lowest attack, while Bulbasaur is average all around.

Look at the values of the characters at the start of the game.
Some of these values may be super low, some may be average, while others are super high.
Picking the proper starting character is one key point in victory.

Upon picking your initial character, your order of opponents is equally as vital.
Sometimes you would want to choose a weak character so that you could get as high of an attack as possible, while other times choosing the opponent that won't kill you quickly will be the best play.
Regardless, there is some thought that needs to come into play, so choose everything wisely!

![results-screen](https://user-images.githubusercontent.com/8729300/47174288-30513080-d2de-11e8-9a64-07892132c87c.png)

### TODO / BUGS
