// ============================================
// Здесь нужно реализовать основную логику игры
// ============================================

import readline from 'node:readline/promises';

// Функция 1: компьютер случайно выбирает 'rock', 'paper' или 'scissors'
export function getComputerChoice() {
  // TODO: реализуй случайный выбор из 'rock', 'paper', 'scissors'
  throw new Error('getComputerChoice не реализована');
}

// Функция 2: определяет, кто победил
// playerChoice и computerChoice — это строки: 'rock', 'paper' или 'scissors'
// Должна вернуть: 'player', 'computer' или 'draw'
export function determineWinner(playerChoice, computerChoice) {
  // TODO: реализуй логику определения победителя
  throw new Error('determineWinner не реализована');
}

// Функция 3: играет один раунд
// Получает выбор игрока, вызывает getComputerChoice и determineWinner
// Возвращает объект: { playerChoice, computerChoice, result }
export function playRound(playerChoice) {
  // TODO: используй getComputerChoice и determineWinner
  throw new Error('playRound не реализована');
}

// Функция 4: интерактивная игра через консоль
// Уже реализована — использует playRound
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

// Если запустить файл напрямую — запускаем интерактивную игру
if (import.meta.url === `file://${process.argv[1]}`) {
  playInteractiveGame().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
