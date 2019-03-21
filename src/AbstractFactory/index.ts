interface Weapon {
  hit(): void;
}

interface Movement {
  move(): void;
}

interface HeroFactory {
  createMovement(): Movement;
  createWeapon(): Weapon;
}

class Arbalet implements Weapon {
  hit(): void {
    console.log('Arbalet shot');
  }
}

class Sword implements Weapon {
  hit(): void {
    console.log('Sword blow');
  }
}

class FlyMovement implements Movement {
  move(): void {
    console.log('Hero flies');
  }
}

class RunMovement implements Movement {
  move(): void {
    console.log('Hero runs');
  }
}

class ElfFactory implements HeroFactory {
  createMovement(): Movement {
    return new FlyMovement();
  }

  createWeapon(): Weapon {
    return new Arbalet();
  }
}

class KnightFactory implements HeroFactory {
  createMovement(): Movement {
    return new RunMovement();
  }

  createWeapon(): Weapon {
    return new Sword();
  }
}

class Hero {
  private _weapon: Weapon;
  public get weapon(): Weapon {
    return this._weapon;
  }
  public set weapon(weapon: Weapon) {
    this._weapon = weapon;
  }

  private _movement: Movement;
  public get movement(): Movement {
    return this._movement;
  }
  public set movement(movement: Movement) {
    this._movement = movement;
  }

  constructor(factory: HeroFactory) {
    this.weapon = factory.createWeapon();
    this.movement = factory.createMovement();
  }

  public move() {
    this.movement.move();
  }

  public hit() {
    this.weapon.hit();
  }
}
