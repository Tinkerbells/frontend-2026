import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateSecretNumber, checkGuess, playRound, playInteractiveGame } from '../src/game.js';

describe('generateSecretNumber', () => {
  it('должна возвращать число в заданном диапазоне', () => {
    for (let i = 0; i < 50; i++) {
      const num = generateSecretNumber(1, 100);
      assert.ok(num >= 1 && num <= 100, `Число ${num} вне диапазона [1, 100]`);
      assert.ok(Number.isInteger(num), `Число ${num} не целое`);
    }
  });

  it('должна работать с другими диапазонами', () => {
    const num = generateSecretNumber(50, 60);
    assert.ok(num >= 50 && num <= 60);
  });

  it('должна выбрасывать ошибку при min > max', () => {
    assert.throws(() => generateSecretNumber(100, 1));
  });

  it('должна выбрасывать ошибку при нецелых аргументах', () => {
    assert.throws(() => generateSecretNumber(1.5, 10));
    assert.throws(() => generateSecretNumber(1, 10.5));
  });
});

describe('checkGuess', () => {
  it('должна возвращать correct при угаданном числе', () => {
    assert.strictEqual(checkGuess(42, 42), 'correct');
  });

  it('должна возвращать too-low, если догадка меньше', () => {
    assert.strictEqual(checkGuess(10, 42), 'too-low');
  });

  it('должна возвращать too-high, если догадка больше', () => {
    assert.strictEqual(checkGuess(99, 42), 'too-high');
  });

  it('должна выбрасывать ошибку при нечисловых аргументах', () => {
    assert.throws(() => checkGuess('10', 42));
    assert.throws(() => checkGuess(10, '42'));
  });

  it('должна выбрасывать ошибку при нецелых числах', () => {
    assert.throws(() => checkGuess(10.5, 42));
    assert.throws(() => checkGuess(10, 42.5));
  });
});

describe('playRound', () => {
  it('должна возвращать объект с guess, secret и result', () => {
    const round = playRound(50);
    assert.ok(round && typeof round === 'object');
    assert.ok('guess' in round);
    assert.ok('secret' in round);
    assert.ok('result' in round);
    assert.strictEqual(round.guess, 50);
    assert.ok(['too-low', 'too-high', 'correct'].includes(round.result));
  });

  it('secret должен быть в диапазоне от 1 до 100', () => {
    const round = playRound(50);
    assert.ok(round.secret >= 1 && round.secret <= 100);
  });

  it('result должен соответствовать guess и secret', () => {
    const round = playRound(50);
    const expected = checkGuess(round.guess, round.secret);
    assert.strictEqual(round.result, expected);
  });

  it('должна выбрасывать ошибку при нецелой догадке', () => {
    assert.throws(() => playRound('50'));
    assert.throws(() => playRound(50.5));
  });
});

describe('playInteractiveGame', () => {
  it('должна быть экспортирована как функция', () => {
    assert.strictEqual(typeof playInteractiveGame, 'function');
  });
});
