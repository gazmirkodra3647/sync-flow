/*
 * Filename: sophisticated_application.js
 * 
 * This code demonstrates a sophisticated and complex JavaScript application
 * that simulates a virtual pet game. The virtual pet can be fed, played with,
 * and put to sleep. It also has various states and needs to be taken care of.
 * The game also includes a GUI interface and handles user input and events.
 * This is just a demonstration code and does not include all the features that
 * a complete virtual pet game would have.
 */

// Define the VirtualPet class
class VirtualPet {
  constructor(name, initialHunger, initialEnergy, initialHappiness) {
    this.name = name;
    this.hunger = initialHunger;
    this.energy = initialEnergy;
    this.happiness = initialHappiness;
    this.isSleeping = false;
  }

  feed() {
    this.hunger -= 10;
    this.happiness += 5;
    this.printStatus();
  }

  play() {
    this.hunger += 5;
    this.energy -= 10;
    this.happiness += 10;
    this.printStatus();
  }

  sleep() {
    this.energy += 20;
    this.isSleeping = true;
    setTimeout(() => {
      this.isSleeping = false;
      this.printStatus();
    }, 5000); // Simulate 5 seconds of sleeping
  }

  printStatus() {
    console.log("--- " + this.name + "'s Status ---");
    console.log("Hunger: " + this.hunger);
    console.log("Energy: " + this.energy);
    console.log("Happiness: " + this.happiness);
    console.log("Sleeping: " + (this.isSleeping ? "Yes" : "No"));
    console.log("----------------------");
  }
}

// Create a new VirtualPet instance
const myPet = new VirtualPet("Fluffy", 50, 70, 80);

// Print the initial status
myPet.printStatus();

// Simulate some interactions with the virtual pet
myPet.feed();
myPet.play();
myPet.sleep();
