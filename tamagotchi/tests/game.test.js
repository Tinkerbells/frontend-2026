import { describe, it } from 'node:test';
import assert from 'node:assert';
import { createPet, feed, play, sleep, checkStatus, playInteractiveGame } from '../src/game.js';

describe('createPet', () => {
  it('должна возвращать объект с правильными стартовыми статами', () => {
    const pet = createPet('Шарик');
    assert.strictEqual(pet.name, 'Шарик');
    assert.strictEqual(pet.health, 100);
    assert.strictEqual(pet.hunger, 50);
    assert.strictEqual(pet.happiness, 50);
    assert.strictEqual(pet.energy, 50);
    assert.strictEqual(pet.gold, 0);
    assert.strictEqual(pet.dead, false);
  });

  it('должна преобразовывать имя в строку', () => {
    const pet = createPet(123);
    assert.strictEqual(pet.name, '123');
  });
});

describe('feed', () => {
  it('должна уменьшать голод на 20', () => {
    const pet = createPet('Шарик');
    feed(pet);
    assert.strictEqual(pet.hunger, 30);
  });

  it('должна увеличивать здоровье на 5', () => {
    const pet = createPet('Шарик');
    pet.health = 80;
    feed(pet);
    assert.strictEqual(pet.health, 85);
  });

  it('голод не должен уходить ниже 0', () => {
    const pet = createPet('Шарик');
    pet.hunger = 5;
    feed(pet);
    assert.strictEqual(pet.hunger, 0);
  });

  it('здоровье не должно превышать 100', () => {
    const pet = createPet('Шарик');
    pet.health = 98;
    feed(pet);
    assert.strictEqual(pet.health, 100);
  });
});

describe('play', () => {
  it('должна увеличивать счастье на 15', () => {
    const pet = createPet('Шарик');
    play(pet);
    assert.strictEqual(pet.happiness, 65);
  });

  it('должна увеличивать голод на 10', () => {
    const pet = createPet('Шарик');
    play(pet);
    assert.strictEqual(pet.hunger, 60);
  });

  it('должна уменьшать энергию на 10', () => {
    const pet = createPet('Шарик');
    play(pet);
    assert.strictEqual(pet.energy, 40);
  });

  it('счастье не должно превышать 100', () => {
    const pet = createPet('Шарик');
    pet.happiness = 95;
    play(pet);
    assert.strictEqual(pet.happiness, 100);
  });

  it('голод не должен превышать 100', () => {
    const pet = createPet('Шарик');
    pet.hunger = 95;
    play(pet);
    assert.strictEqual(pet.hunger, 100);
  });

  it('энергия не должна уходить ниже 0', () => {
    const pet = createPet('Шарик');
    pet.energy = 5;
    play(pet);
    assert.strictEqual(pet.energy, 0);
  });

  it('при достижении голода 100 должна отнимать 20 здоровья', () => {
    const pet = createPet('Шарик');
    pet.hunger = 90;
    play(pet);
    assert.strictEqual(pet.hunger, 100);
    assert.strictEqual(pet.health, 80);
  });

  it('при здоровье 0 или меньше питомец умирает', () => {
    const pet = createPet('Шарик');
    pet.hunger = 100;
    pet.health = 10;
    play(pet);
    assert.strictEqual(pet.health, 0);
    assert.strictEqual(pet.dead, true);
  });
});

describe('sleep', () => {
  it('должна увеличивать энергию на 30', () => {
    const pet = createPet('Шарик');
    sleep(pet);
    assert.strictEqual(pet.energy, 80);
  });

  it('должна увеличивать голод на 5', () => {
    const pet = createPet('Шарик');
    sleep(pet);
    assert.strictEqual(pet.hunger, 55);
  });

  it('энергия не должна превышать 100', () => {
    const pet = createPet('Шарик');
    pet.energy = 90;
    sleep(pet);
    assert.strictEqual(pet.energy, 100);
  });

  it('голод не должен превышать 100', () => {
    const pet = createPet('Шарик');
    pet.hunger = 98;
    sleep(pet);
    assert.strictEqual(pet.hunger, 100);
  });
});

describe('checkStatus', () => {
  it('должна возвращать строку со всеми статами', () => {
    const pet = createPet('Шарик');
    const status = checkStatus(pet);
    assert.ok(status.includes('Шарик'));
    assert.ok(status.includes('100'));
    assert.ok(status.includes('50'));
    assert.ok(status.includes('0'));
    assert.ok(status.includes('да'));
  });

  it('должна показывать мёртвого питомца', () => {
    const pet = createPet('Шарик');
    pet.dead = true;
    const status = checkStatus(pet);
    assert.ok(status.includes('нет'));
  });
});

describe('playInteractiveGame', () => {
  it('должна быть экспортирована как функция', () => {
    assert.strictEqual(typeof playInteractiveGame, 'function');
  });
});
