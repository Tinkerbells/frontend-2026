// ============================================
// Решение (пример реализации)
// ============================================

export function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('name должно быть непустой строкой');
  }
  return `Привет, ${name}!`;
}

export function sum(a, b) {
  return a + b;
}

export function double(x) {
  return x * 2;
}

export function isPositive(number) {
  if (typeof number !== 'number') {
    throw new Error('number должно быть числом');
  }
  return number > 0;
}

export function getMax(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Оба аргумента должны быть числами');
  }
  return a > b ? a : b;
}

export function compareNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Оба аргумента должны быть числами');
  }
  if (a > b) return 'greater';
  if (a < b) return 'less';
  return 'equal';
}

export function getRandomElement(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('items должен быть непустым массивом');
  }
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export function contains(items, item) {
  if (!Array.isArray(items)) {
    throw new Error('items должен быть массивом');
  }
  return items.includes(item);
}

export function isValidInteger(value) {
  return typeof value === 'number' && Number.isInteger(value);
}

export function createPerson(firstName, lastName, age) {
  if (
    typeof firstName !== 'string' || firstName.trim() === '' ||
    typeof lastName !== 'string' || lastName.trim() === ''
  ) {
    throw new Error('firstName и lastName должны быть непустыми строками');
  }
  if (typeof age !== 'number' || age < 0 || !Number.isInteger(age)) {
    throw new Error('age должен быть целым числом >= 0');
  }
  return { firstName, lastName, age };
}

export function getFullName(person) {
  if (
    !person || typeof person !== 'object' ||
    typeof person.firstName !== 'string' ||
    typeof person.lastName !== 'string'
  ) {
    throw new Error('person должен быть объектом с firstName и lastName');
  }
  return `${person.firstName} ${person.lastName}`;
}

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

export function canBeat(attacker, defender) {
  if (!VALID_CHOICES.includes(attacker) || !VALID_CHOICES.includes(defender)) {
    throw new Error('Недопустимый выбор');
  }
  if (attacker === defender) {
    return false;
  }
  return (
    (attacker === 'rock' && defender === 'scissors') ||
    (attacker === 'scissors' && defender === 'paper') ||
    (attacker === 'paper' && defender === 'rock')
  );
}

// Пример использования через CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet('Иван'));
  console.log(sum(2, 3));
  console.log(double(5));
  console.log(isPositive(10));
  console.log(getMax(7, 3));
  console.log(compareNumbers(5, 3));
  console.log(getRandomElement(['камень', 'ножницы', 'бумага']));
  console.log(contains([1, 2, 3], 2));
  console.log(isValidInteger(42));
  console.log(createPerson('Иван', 'Иванов', 25));
  console.log(getFullName({ firstName: 'Иван', lastName: 'Иванов' }));
  console.log(canBeat('rock', 'scissors'));
}
