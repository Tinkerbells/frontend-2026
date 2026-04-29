// ============================================
// Решение (пример реализации)
// ============================================

import readline from 'node:readline/promises';

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

/**
 * Возвращает случайный выбор компьютера
 * @returns {string}
 */
export function getComputerChoice() {
  const index = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[index];
}

/**
 * Определяет победителя раунда
 * @param {string} playerChoice
 * @param {string} computerChoice
 * @returns {string} 'player', 'computer' или 'draw'
 */
export function determineWinner(playerChoice, computerChoice) {
  if (!VALID_CHOICES.includes(playerChoice)) {
    throw new Error(`Недопустимый выбор игрока: ${playerChoice}`);
  }
  if (!VALID_CHOICES.includes(computerChoice)) {
    throw new Error(`Недопустимый выбор компьютера: ${computerChoice}`);
  }

  if (playerChoice === computerChoice) {
    return 'draw';
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'player';
  }

  return 'computer';
}

/**
 * Играет один раунд
 * @param {string} playerChoice
 * @returns {{playerChoice: string, computerChoice: string, result: string}}
 */
export function playRound(playerChoice) {
  if (!VALID_CHOICES.includes(playerChoice)) {
    throw new Error(`Недопустимый выбор игрока: ${playerChoice}`);
  }

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  return {
    playerChoice,
    computerChoice,
    result,
  };
}

/**
 * Интерактивная игра через консоль
 */
export async function playInteractiveGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Добро пожаловать в Камень, Ножницы, Бумага!');
  console.log('Для выхода введи "exit".');

  try {
    while (true) {
      const input = await rl.question('Твой выбор (rock / paper / scissors): ');
      const playerChoice = input.trim().toLowerCase();

      if (playerChoice === 'exit') {
        console.log('Спасибо за игру!');
        return;
      }

      const round = playRound(playerChoice);
      console.log(`Компьютер выбрал: ${round.computerChoice}`);
      console.log(
        round.result === 'draw'
          ? 'Ничья!'
          : round.result === 'player'
            ? 'Ты победил!'
            : 'Победил компьютер!'
      );
      console.log('---');
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
