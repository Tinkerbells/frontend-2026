// ============================================
// Здесь нужно реализовать основную логику игры
// ============================================

import readline from 'node:readline/promises';

// Функция 1: генерирует случайное целое число от min до max включительно
export function generateSecretNumber(min, max) {
  // TODO: реализуй генерацию случайного целого числа в диапазоне [min, max]
  throw new Error('generateSecretNumber не реализована');
}

// Функция 2: сравнивает догадку игрока с секретным числом
// guess — число, которое ввёл игрок
// secret — загаданное компьютером число
// Должна вернуть: 'too-low', 'too-high' или 'correct'
export function checkGuess(guess, secret) {
  // TODO: реализуй логику сравнения
  throw new Error('checkGuess не реализована');
}

// Функция 3: играет один раунд
// Получает догадку игрока, генерирует секретное число (по умолчанию от 1 до 100)
// Возвращает объект: { guess, secret, result }
export function playRound(guess) {
  // TODO: используй generateSecretNumber и checkGuess
  throw new Error('playRound не реализована');
}

// Функция 4: интерактивная игра через консоль
// Уже реализована — использует generateSecretNumber и checkGuess
export async function playInteractiveGame(min = 1, max = 100) {
  const secret = generateSecretNumber(min, max);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`Я загадал число от ${min} до ${max}. Попробуй угадать!`);

  let attempts = 0;

  try {
    while (true) {
      const input = await rl.question('Твоя догадка: ');
      const guess = Number(input.trim());

      if (!Number.isInteger(guess)) {
        console.log('Пожалуйста, введи целое число.');
        continue;
      }

      attempts++;
      const result = checkGuess(guess, secret);

      if (result === 'correct') {
        console.log(`Поздравляю! Ты угадал число ${secret} за ${attempts} попыток.`);
        return { secret, attempts };
      } else if (result === 'too-low') {
        console.log('Слишком мало! Попробуй число побольше.');
      } else {
        console.log('Слишком много! Попробуй число поменьше.');
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
