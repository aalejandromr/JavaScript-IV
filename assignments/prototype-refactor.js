/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(gameObjectAttributes){
//     this.createdAt = gameObjectAttributes.createdAt;
//     this.name = gameObjectAttributes.name;
//     this.dimensions = gameObjectAttributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the GameObject.`;
//   }

  class GameObject {
      constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
      }

      destroy(){
        return `${this.name} was removed from the GameObject.`;
      }
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(characterStatsAttributes){
//     // To trigger the constructor of the superclass
//     GameObject.call(this, characterStatsAttributes);
//     this.healthPoints = characterStatsAttributes.healthPoints;
//   }
  
//   //CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   // To mix both prototypes and don't loose the child's
  
  
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage.`
//   }
  
//   CharacterStats.prototype.attack = function(points, obj){
//     if (this.healthPoints < 0) {
//       return `You already died`;
//     }
//     if (obj.healthPoints < 0) {
//       return `${obj.name} already died, you can leave him`;
//     }
//     obj.healthPoints -= points;
//     return  obj.healthPoints > 0 ? `${obj.name}: Health -> ${obj.healthPoints}` : `He died, you win! yay`;
//   }
  
//   Object.assign(CharacterStats.prototype, GameObject.prototype);

  class CharacterStats extends GameObject {
      constructor(attributes){
        super(attributes);
        this.healthPoints = attributes.healthPoints;
      }

      takeDamage(){
        return `${this.name} took damage.`
      }
      
      attack(points, obj){
        if (this.healthPoints < 0) {
          return `You already died`;
        }
        if (obj.healthPoints < 0) {
          return `${obj.name} already died, you can leave him`;
        }
        obj.healthPoints -= points;
        return  obj.healthPoints > 0 ? `${obj.name}: Health -> ${obj.healthPoints}` : `He died, you win! yay`;
      }
  }
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
//   function Humanoid(humanoidAttributes){
//     this.team = humanoidAttributes.team;
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
//     CharacterStats.call(this, humanoidAttributes)
//   }
  
//   // Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function(){
//     return `offers a greeting in ${this.language}`;
//   }
  
//   // Humanoid.prototype = Object.create(CharacterStats.prototype);
//   // Humanoid.prototype.constructor = Humanoid;
  
//   // To create mixings of child and parent
//   Object.assign(Humanoid.prototype, CharacterStats.prototype);
  // Humanoid.prototype = GameObject;
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  class Humanoid extends CharacterStats{
      constructor(attributes){
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
      }

      greet(){
        return `offers a greeting in ${this.language}`;
      }
  }
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(mage)
    //console.log(mage.constructor)
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects 
    // * which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    // function Villain(args){
    //   Humanoid.call(this, args);
    // }
  
    // Villain.prototype = Object.create(Humanoid.prototype);
    // function Hero(args) {
    //   Humanoid.call(this, args);
    // }
  
    // Hero.prototype = Object.create(Humanoid.prototype);

    class Villain extends Humanoid {
        constructor(){
            super(attributes);
        }
    }

    class Hero extends Humanoid {
        constructor(attributes){
            super(attributes)
        }
    }
  
    const thanos = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Thanos',
      team: 'Thanos',
      weapons: [
        'Chasquido',
      ],
      language: 'Common Tongue',
    });
  
    const spiderman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Spiderman',
      team: 'Avengers',
      weapons: [
        'spider',
      ],
      language: 'Common Tongue',
    });
  
    console.log(spiderman.healthPoints)
    console.log(spiderman.attack(1, thanos))
    console.log(spiderman.attack(1, thanos))
    console.log(spiderman.attack(1, thanos))
    console.log(spiderman.attack(1, thanos))
    console.log(thanos.attack(1, spiderman))
    console.log(thanos.attack(1, spiderman))
    console.log(thanos.attack(1, spiderman))
    console.log(thanos.attack(1, spiderman))
    // console.log(thanos.attack(1, spiderman))
    // console.log(thanos.attack(1, spiderman))
    console.log(spiderman.attack(1, thanos))
    console.log(spiderman.attack(1, thanos))
    console.log(spiderman.attack(1, thanos))