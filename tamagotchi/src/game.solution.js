// ============================================
// Решение (пример реализации)
// ============================================

import readline from 'node:readline/promises';

/**
 * Создаёт объект питомца
 * @param {string} name
 * @returns {{name: string, health: number, hunger: number, happiness: number, energy: number, gold: number, dead: boolean}}
 */
export function createPet(name) {
  return {
    name: String(name),
    health: 100,
    hunger: 50,
    happiness: 50,
    energy: 50,
    gold: 0,
    dead: false,
  };
}

/**
 * Кормит питомца
 * @param {{health: number, hunger: number}} pet
 */
export function feed(pet) {
  pet.hunger = Math.max(0, pet.hunger - 20);
  pet.health = Math.min(100, pet.health + 5);
}

/**
 * Играет с питомцем
 * @param {{health: number, hunger: number, happiness: number, energy: number, dead: boolean}} pet
 */
export function play(pet) {
  pet.happiness = Math.min(100, pet.happiness + 15);
  pet.hunger = Math.min(100, pet.hunger + 10);
  pet.energy = Math.max(0, pet.energy - 10);

  if (pet.hunger >= 100) {
    pet.health -= 20;
  }

  if (pet.health <= 0) {
    pet.dead = true;
    pet.health = 0;
  }
}

/**
 * Укладывает питомца спать
 * @param {{hunger: number, energy: number}} pet
 */
export function sleep(pet) {
  pet.energy = Math.min(100, pet.energy + 30);
  pet.hunger = Math.min(100, pet.hunger + 5);
}

/**
 * Возвращает строку с текущими статами
 * @param {{name: string, health: number, hunger: number, happiness: number, energy: number, gold: number, dead: boolean}} pet
 * @returns {string}
 */
export function checkStatus(pet) {
  return `Имя: ${pet.name} | Здоровье: ${pet.health} | Голод: ${pet.hunger} | Счастье: ${pet.happiness} | Энергия: ${pet.energy} | Золото: ${pet.gold} | Жив: ${pet.dead ? 'нет' : 'да'}`;
}

/**
 * Интерактивная игра через консоль
 */
export async function playInteractiveGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const name = await rl.question('Как зовут твоего питомца? ');
  const pet = createPet(name.trim() || 'Бобик');

  console.log(`\nПитомец ${pet.name} родился! Ухаживай за ним.`);
  console.log('Доступные команды: 1 — покормить, 2 — поиграть, 3 — спать, 4 — статус, exit — выход\n');

  try {
    while (!pet.dead) {
      const input = await rl.question('Твой выбор: ');
      const choice = input.trim();

      if (choice === 'exit') {
        console.log('До встречи!');
        return;
      }

      if (choice === '1') {
        feed(pet);
        console.log('Ты покормил питомца. 🍖');
      } else if (choice === '2') {
        play(pet);
        if (pet.dead) {
          console.log('Ты слишком много играл с питомцем... Он умер от голода. 💀');
          console.log(checkStatus(pet));
          return;
        }
        console.log('Ты поиграл с питомцем. 🎾');
      } else if (choice === '3') {
        sleep(pet);
        console.log('Питомец поспал. 💤');
      } else if (choice === '4') {
        console.log(checkStatus(pet));
      } else {
        console.log('Неизвестная команда. Попробуй 1, 2, 3, 4 или exit.');
      }
    }
  } finally {
    rl.close();
  }
}

// Запуск интерактивной игры при прямом запуске файла
if (import.meta.url === `file://${process.argv[1]}`) {
  playInteractiveGame().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
