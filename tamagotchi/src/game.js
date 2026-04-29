// ============================================
// Здесь нужно реализовать основную логику игры
// ============================================

import readline from 'node:readline/promises';

// Тема: Объекты — https://learn.javascript.ru/object
// Тема: Функции — https://learn.javascript.ru/function-basics
// Функция 1: создаёт объект питомца с заданными стартовыми статами
// Свойства объекта: name, health, hunger, happiness, energy, gold, dead
// health = 100, hunger = 50, happiness = 50, energy = 50, gold = 0, dead = false
export function createPet(name) {
  // TODO: создай и верни объект со свойствами питомца
  throw new Error('createPet не реализована');
}

// Тема: Свойства объекта — https://learn.javascript.ru/object#svoystva-obekta
// Тема: Условия: if — https://learn.javascript.ru/ifelse
// Тема: Операторы, математика — https://learn.javascript.ru/operators
// Функция 2: кормит питомца
// Уменьшает hunger на 20 (но не ниже 0)
// Увеличивает health на 5 (но не выше 100)
export function feed(pet) {
  // TODO: измени свойства объекта pet
  throw new Error('feed не реализована');
}

// Тема: Свойства объекта — https://learn.javascript.ru/object#svoystva-obekta
// Тема: Условия: if — https://learn.javascript.ru/ifelse
// Тема: Операторы, математика — https://learn.javascript.ru/operators
// Функция 3: играет с питомцем
// Увеличивает happiness на 15 (но не выше 100)
// Увеличивает hunger на 10 (но не выше 100)
// Уменьшает energy на 10 (но не ниже 0)
// Если hunger ДОСТИГ 100 — питомец теряет 20 health
// Если health стало 0 или меньше — питомец умирает (dead = true)
export function play(pet) {
  // TODO: измени свойства объекта pet, проверь границы и смерть
  throw new Error('play не реализована');
}

// Тема: Свойства объекта — https://learn.javascript.ru/object#svoystva-obekta
// Тема: Условия: if — https://learn.javascript.ru/ifelse
// Тема: Операторы, математика — https://learn.javascript.ru/operators
// Функция 4: укладывает питомца спать
// Увеличивает energy на 30 (но не выше 100)
// Увеличивает hunger на 5 (но не выше 100)
export function sleep(pet) {
  // TODO: измени свойства объекта pet
  throw new Error('sleep не реализована');
}

// Тема: Шаблонные строки — https://learn.javascript.ru/string#shablonnye-stroki
// Тема: Свойства объекта — https://learn.javascript.ru/object#svoystva-obekta
// Функция 5: возвращает строку с текущими статами питомца
// Пример: "Имя: Бобик | Здоровье: 100 | Голод: 50 | Счастье: 50 | Энергия: 50 | Золото: 0 | Жив: да"
export function checkStatus(pet) {
  // TODO: верни отформатированную строку со статами питомца
  throw new Error('checkStatus не реализована');
}

// Тема: Циклы while — https://learn.javascript.ru/while-for
// Тема: Условия: if — https://learn.javascript.ru/ifelse
// Функция 6: интерактивная игра через консоль
// Уже реализована — использует createPet, feed, play, sleep, checkStatus
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

// Если запустить файл напрямую — запускаем интерактивную игру
if (import.meta.url === `file://${process.argv[1]}`) {
  playInteractiveGame().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
