// ============================================
// Решение (пример реализации)
// ============================================

import readline from 'node:readline/promises';

/**
 * Генерирует случайное целое число в диапазоне [min, max]
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function generateSecretNumber(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('min и max должны быть целыми числами');
  }
  if (min > max) {
    throw new Error('min не может быть больше max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Сравнивает догадку игрока с секретным числом
 * @param {number} guess
 * @param {number} secret
 * @returns {string} 'too-low', 'too-high' или 'correct'
 */
export function checkGuess(guess, secret) {
  if (typeof guess !== 'number' || typeof secret !== 'number') {
    throw new Error('guess и secret должны быть числами');
  }
  if (!Number.isInteger(guess) || !Number.isInteger(secret)) {
    throw new Error('guess и secret должны быть целыми числами');
  }

  if (guess < secret) {
    return 'too-low';
  }
  if (guess > secret) {
    return 'too-high';
  }
  return 'correct';
}

/**
 * Играет один раунд
 * @param {number} guess
 * @returns {{guess: number, secret: number, result: string}}
 */
export function playRound(guess) {
  if (typeof guess !== 'number' || !Number.isInteger(guess)) {
    throw new Error('Догадка должна быть целым числом');
  }

  const secret = generateSecretNumber(1, 100);
  const result = checkGuess(guess, secret);

  return {
    guess,
    secret,
    result,
  };
}

/**
 * Интерактивная игра через консоль
 * @param {number} min
 * @param {number} max
 * @returns {{secret: number, attempts: number}}
 */
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

// Запуск интерактивной игры при прямом запуске файла
if (import.meta.url === `file://${process.argv[1]}`) {
  playInteractiveGame().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
