import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getComputerChoice, determineWinner, playRound, playInteractiveGame } from '../src/game.js';

describe('getComputerChoice', () => {
  it('должна возвращать одно из допустимых значений', () => {
    const validChoices = ['rock', 'paper', 'scissors'];
    for (let i = 0; i < 50; i++) {
      const choice = getComputerChoice();
      assert.ok(validChoices.includes(choice), `Недопустимый выбор: ${choice}`);
    }
  });
});

describe('determineWinner', () => {
  it('ничья при одинаковом выборе', () => {
    assert.strictEqual(determineWinner('rock', 'rock'), 'draw');
    assert.strictEqual(determineWinner('paper', 'paper'), 'draw');
    assert.strictEqual(determineWinner('scissors', 'scissors'), 'draw');
  });

  it('камень побеждает ножницы', () => {
    assert.strictEqual(determineWinner('rock', 'scissors'), 'player');
    assert.strictEqual(determineWinner('scissors', 'rock'), 'computer');
  });

  it('ножницы побеждают бумагу', () => {
    assert.strictEqual(determineWinner('scissors', 'paper'), 'player');
    assert.strictEqual(determineWinner('paper', 'scissors'), 'computer');
  });

  it('бумага побеждает камень', () => {
    assert.strictEqual(determineWinner('paper', 'rock'), 'player');
    assert.strictEqual(determineWinner('rock', 'paper'), 'computer');
  });

  it('должна выбрасывать ошибку при недопустимом выборе игрока', () => {
    assert.throws(() => determineWinner('invalid', 'rock'));
  });

  it('должна выбрасывать ошибку при недопустимом выборе компьютера', () => {
    assert.throws(() => determineWinner('rock', 'invalid'));
  });
});

describe('playRound', () => {
  it('должна возвращать объект с playerChoice, computerChoice и result', () => {
    const round = playRound('rock');
    assert.ok(round && typeof round === 'object');
    assert.ok('playerChoice' in round);
    assert.ok('computerChoice' in round);
    assert.ok('result' in round);
    assert.strictEqual(round.playerChoice, 'rock');
    assert.ok(['player', 'computer', 'draw'].includes(round.result));
  });

  it('должна выбрасывать ошибку при недопустимом выборе игрока', () => {
    assert.throws(() => playRound('invalid'));
  });
});

describe('playInteractiveGame', () => {
  it('должна быть экспортирована как функция', () => {
    assert.strictEqual(typeof playInteractiveGame, 'function');
  });
});
