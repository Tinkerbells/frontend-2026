import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  greet,
  sum,
  double,
  isPositive,
  getMax,
  compareNumbers,
  getRandomElement,
  contains,
  isValidInteger,
  createPerson,
  getFullName,
  canBeat,
} from '../src/practice.js';

// --- Тема 1: Функции и return ---

describe('greet', () => {
  it('возвращает приветствие с именем', () => {
    assert.strictEqual(greet('Иван'), 'Привет, Иван!');
    assert.strictEqual(greet('Анна'), 'Привет, Анна!');
  });

  it('выбрасывает ошибку, если name не строка', () => {
    assert.throws(() => greet(123));
    assert.throws(() => greet(null));
  });

  it('выбрасывает ошибку, если name пустая строка', () => {
    assert.throws(() => greet(''));
    assert.throws(() => greet('   '));
  });
});

describe('sum', () => {
  it('складывает два положительных числа', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('работает с отрицательными числами', () => {
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(-5, -3), -8);
  });
});

describe('double', () => {
  it('удваивает положительное число', () => {
    assert.strictEqual(double(5), 10);
  });

  it('удваивает ноль', () => {
    assert.strictEqual(double(0), 0);
  });

  it('удваивает отрицательное число', () => {
    assert.strictEqual(double(-4), -8);
  });
});

// --- Тема 2: Условия if/else ---

describe('isPositive', () => {
  it('возвращает true для положительных чисел', () => {
    assert.strictEqual(isPositive(1), true);
    assert.strictEqual(isPositive(100), true);
  });

  it('возвращает false для нуля', () => {
    assert.strictEqual(isPositive(0), false);
  });

  it('возвращает false для отрицательных чисел', () => {
    assert.strictEqual(isPositive(-5), false);
  });

  it('выбрасывает ошибку, если аргумент не число', () => {
    assert.throws(() => isPositive('5'));
    assert.throws(() => isPositive(true));
  });
});

describe('getMax', () => {
  it('возвращает большее из двух чисел', () => {
    assert.strictEqual(getMax(3, 7), 7);
    assert.strictEqual(getMax(10, 2), 10);
  });

  it('работает, если числа равны', () => {
    assert.strictEqual(getMax(5, 5), 5);
  });

  it('выбрасывает ошибку, если аргумент не число', () => {
    assert.throws(() => getMax('3', 7));
    assert.throws(() => getMax(3, null));
  });
});

// --- Тема 3: Сравнение чисел ---

describe('compareNumbers', () => {
  it("возвращает 'greater', если a > b", () => {
    assert.strictEqual(compareNumbers(5, 3), 'greater');
  });

  it("возвращает 'less', если a < b", () => {
    assert.strictEqual(compareNumbers(2, 8), 'less');
  });

  it("возвращает 'equal', если a === b", () => {
    assert.strictEqual(compareNumbers(4, 4), 'equal');
  });

  it('выбрасывает ошибку, если аргумент не число', () => {
    assert.throws(() => compareNumbers('5', 3));
    assert.throws(() => compareNumbers(5, undefined));
  });
});

// --- Тема 4: Массивы и случайный выбор ---

describe('getRandomElement', () => {
  it('возвращает элемент из переданного массива', () => {
    const arr = ['a', 'b', 'c'];
    for (let i = 0; i < 30; i++) {
      const el = getRandomElement(arr);
      assert.ok(arr.includes(el), `Недопустимый элемент: ${el}`);
    }
  });

  it('выбрасывает ошибку, если передан не массив', () => {
    assert.throws(() => getRandomElement('abc'));
    assert.throws(() => getRandomElement(123));
  });

  it('выбрасывает ошибку, если массив пустой', () => {
    assert.throws(() => getRandomElement([]));
  });
});

describe('contains', () => {
  it('возвращает true, если элемент есть в массиве', () => {
    assert.strictEqual(contains([1, 2, 3], 2), true);
    assert.strictEqual(contains(['a', 'b'], 'a'), true);
  });

  it('возвращает false, если элемента нет', () => {
    assert.strictEqual(contains([1, 2, 3], 5), false);
    assert.strictEqual(contains([], 1), false);
  });

  it('выбрасывает ошибку, если передан не массив', () => {
    assert.throws(() => contains('123', '2'));
    assert.throws(() => contains(null, 2));
  });
});

// --- Тема 5: Проверка данных ---

describe('isValidInteger', () => {
  it('возвращает true для целых чисел', () => {
    assert.strictEqual(isValidInteger(0), true);
    assert.strictEqual(isValidInteger(-5), true);
    assert.strictEqual(isValidInteger(100), true);
  });

  it('возвращает false для дробных чисел', () => {
    assert.strictEqual(isValidInteger(3.14), false);
    assert.strictEqual(isValidInteger(-0.5), false);
  });

  it('возвращает false для не-чисел', () => {
    assert.strictEqual(isValidInteger('5'), false);
    assert.strictEqual(isValidInteger(null), false);
    assert.strictEqual(isValidInteger(undefined), false);
    assert.strictEqual(isValidInteger(true), false);
  });
});

// --- Тема 6: Объекты ---

describe('createPerson', () => {
  it('создаёт объект с нужными полями', () => {
    const person = createPerson('Иван', 'Иванов', 25);
    assert.deepStrictEqual(person, {
      firstName: 'Иван',
      lastName: 'Иванов',
      age: 25,
    });
  });

  it('выбрасывает ошибку при пустой firstName', () => {
    assert.throws(() => createPerson('', 'Иванов', 25));
  });

  it('выбрасывает ошибку при пустой lastName', () => {
    assert.throws(() => createPerson('Иван', '', 25));
  });

  it('выбрасывает ошибку, если age отрицательный', () => {
    assert.throws(() => createPerson('Иван', 'Иванов', -1));
  });

  it('выбрасывает ошибку, если age не целое число', () => {
    assert.throws(() => createPerson('Иван', 'Иванов', 25.5));
  });
});

describe('getFullName', () => {
  it('возвращает полное имя строкой', () => {
    assert.strictEqual(
      getFullName({ firstName: 'Иван', lastName: 'Иванов' }),
      'Иван Иванов'
    );
  });

  it('выбрасывает ошибку, если нет firstName', () => {
    assert.throws(() => getFullName({ lastName: 'Иванов' }));
  });

  it('выбрасывает ошибку, если нет lastName', () => {
    assert.throws(() => getFullName({ firstName: 'Иван' }));
  });

  it('выбрасывает ошибку, если передан не объект', () => {
    assert.throws(() => getFullName(null));
    assert.throws(() => getFullName('Иван Иванов'));
  });
});

// --- Тема 7: Составные условия ---

describe('canBeat', () => {
  it('rock бьёт scissors', () => {
    assert.strictEqual(canBeat('rock', 'scissors'), true);
  });

  it('scissors бьёт paper', () => {
    assert.strictEqual(canBeat('scissors', 'paper'), true);
  });

  it('paper бьёт rock', () => {
    assert.strictEqual(canBeat('paper', 'rock'), true);
  });

  it('возвращает false, если attacker проигрывает', () => {
    assert.strictEqual(canBeat('scissors', 'rock'), false);
    assert.strictEqual(canBeat('rock', 'paper'), false);
    assert.strictEqual(canBeat('paper', 'scissors'), false);
  });

  it('возвращает false при ничьей', () => {
    assert.strictEqual(canBeat('rock', 'rock'), false);
    assert.strictEqual(canBeat('paper', 'paper'), false);
    assert.strictEqual(canBeat('scissors', 'scissors'), false);
  });

  it('выбрасывает ошибку при недопустимом выборе', () => {
    assert.throws(() => canBeat('lizard', 'rock'));
    assert.throws(() => canBeat('rock', 'spock'));
  });
});
