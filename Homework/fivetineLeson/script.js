"use strict";

class Character {
    #secretIdentity;
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
        this.isAlive = true;
        this.#secretIdentity = "";
    }

    attack(target) {
        if (!this.isAlive) {
            return `${this.name} is already defeated.`;
        }
        const damage = this.power;
        target.takeDamage(damage);
        return `${this.name} attacks ${target.name} for ${damage} damage.`;
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
        }
    }

    get secretIdentity() {
        return this.#secretIdentity;
    }

    set secretIdentity(identity) {
        this.#secretIdentity = identity;
    }
}

class Hero extends Character {
    constructor(name, health, power, superpower) {
        super(name, health, power);
        this.superpower = superpower;
    }

    useSuperpower() {
        return `${this.name} uses ${this.superpower} to save the day!`;
    }
}

class Villain extends Character {
    constructor(name, health, power, evilPlan) {
        super(name, health, power);
        this.evilPlan = evilPlan;
    }

    executeEvilPlan() {
        return `${this.name} executes an evil plan: ${this.evilPlan}.`;
    }
}

class SuperHero extends Hero {
    constructor(name, health, power, superpower, costumeColor) {
        super(name, health, power, superpower);
        this.costumeColor = costumeColor;
    }

    changeCostume(color) {
        this.costumeColor = color;
        return `${this.name} changes their costume to ${color}.`;
    }
}

const batman = new SuperHero("Batman", 100, 50, "detective skills", "black");
const joker = new Villain("Joker", 80, 40, "create chaos");
const superman = new SuperHero("Superman", 150, 60, "flight", "blue");

batman.secretIdentity = "Bruce Wayne";

console.log(batman.attack(joker));
console.log(joker.attack(batman));
console.log(batman.changeCostume("gray"));
