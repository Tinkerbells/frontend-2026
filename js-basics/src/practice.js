// ============================================
// Практика: базовые механизмы JavaScript
// ============================================
// Реализуй каждую функцию. Запускай тесты командой: npm test

// --- Тема 1: Функции и return ---

/**
 * Возвращает приветствие.
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  // TODO: верни строку "Привет, {name}!"
  // Если name не строка или пустая — выброси ошибку
  // Полезно: https://learn.javascript.ru/function-basics
  //          https://learn.javascript.ru/variables
  throw new Error('greet не реализована');
}

/**
 * Возвращает сумму двух чисел.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function sum(a, b) {
  // TODO: верни сумму a и b
  // Полезно: https://learn.javascript.ru/operators
  throw new Error('sum не реализована');
}

/**
 * Удваивает число.
 * @param {number} x
 * @returns {number}
 */
export function double(x) {
  // TODO: верни x, умноженное на 2
  // Полезно: https://learn.javascript.ru/operators
  throw new Error('double не реализована');
}

// --- Тема 2: Условия if/else ---

/**
 * Проверяет, положительное ли число.
 * @param {number} number
 * @returns {boolean}
 */
export function isPositive(number) {
  // TODO: верни true, если number > 0, иначе false
  // Если number не число — выброси ошибку
  // Полезно: https://learn.javascript.ru/ifelse
  //          https://learn.javascript.ru/types
  throw new Error('isPositive не реализована');
}

/**
 * Возвращает большее из двух чисел.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function getMax(a, b) {
  // TODO: верни большее из двух чисел
  // Если хотя бы один аргумент не число — выброси ошибку
  // Полезно: https://learn.javascript.ru/ifelse
  throw new Error('getMax не реализована');
}

// --- Тема 3: Сравнение чисел (основа для "Угадай число") ---

/**
 * Сравнивает два числа.
 * @param {number} a
 * @param {number} b
 * @returns {string} 'greater' | 'less' | 'equal'
 */
export function compareNumbers(a, b) {
  // TODO: верни 'greater' если a > b, 'less' если a < b, 'equal' если равны
  // Если хотя бы один аргумент не число — выброси ошибку
  // Полезно: https://learn.javascript.ru/ifelse
  //          https://learn.javascript.ru/operators
  throw new Error('compareNumbers не реализована');
}

// --- Тема 4: Массивы и случайный выбор (основа для "Камень, ножницы, бумага") ---

/**
 * Возвращает случайный элемент из массива.
 * @param {Array} items
 * @returns {*}
 */
export function getRandomElement(items) {
  // TODO: верни случайный элемент из массива items
  // Если items не массив или пустой — выброси ошибку
  // Полезно: https://learn.javascript.ru/array
  //          https://learn.javascript.ru/operators
  throw new Error('getRandomElement не реализована');
}

/**
 * Проверяет наличие элемента в массиве.
 * @param {Array} items
 * @param {*} item
 * @returns {boolean}
 */
export function contains(items, item) {
  // TODO: верни true, если item есть в массиве items, иначе false
  // Если items не массив — выброси ошибку
  // Полезно: https://learn.javascript.ru/array-methods
  throw new Error('contains не реализована');
}

// --- Тема 5: Проверка данных (валидация) ---

/**
 * Проверяет, является ли значение целым числом.
 * @param {*} value
 * @returns {boolean}
 */
export function isValidInteger(value) {
  // TODO: верни true, если value — целое число (number и Number.isInteger), иначе false
  // Полезно: https://learn.javascript.ru/types
  throw new Error('isValidInteger не реализована');
}

// --- Тема 6: Объекты ---

/**
 * Создаёт объект человека.
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @returns {{firstName: string, lastName: string, age: number}}
 */
export function createPerson(firstName, lastName, age) {
  // TODO: верни объект { firstName, lastName, age }
  // firstName и lastName должны быть непустыми строками
  // age должен быть целым числом >= 0
  // Иначе — выброси ошибку
  // Полезно: https://learn.javascript.ru/object
  //          https://learn.javascript.ru/ifelse
  throw new Error('createPerson не реализована');
}

/**
 * Возвращает полное имя из объекта.
 * @param {{firstName: string, lastName: string}} person
 * @returns {string}
 */
export function getFullName(person) {
  // TODO: верни строку "{firstName} {lastName}"
  // person должен быть объектом с полями firstName и lastName (строки)
  // Иначе — выброси ошибку
  // Полезно: https://learn.javascript.ru/object
  throw new Error('getFullName не реализована');
}

// --- Тема 7: Составные условия (основа для "Камень, ножницы, бумага") ---

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

/**
 * Проверяет, побеждает ли attacker defender.
 * @param {string} attacker
 * @param {string} defender
 * @returns {boolean}
 */
export function canBeat(attacker, defender) {
  // TODO: верни true, если attacker побеждает defender по правилам:
  // rock > scissors, scissors > paper, paper > rock
  // Если один из аргументов не из VALID_CHOICES — выброси ошибку
  // Если одинаковые — верни false (ничья не считается победой)
  // Полезно: https://learn.javascript.ru/ifelse
  //          https://learn.javascript.ru/logical-operators
  throw new Error('canBeat не реализована');
}

// Если запустить файл напрямую — показываем подсказку
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Практика базовых механизмов JavaScript');
  console.log('Реализуй функции в этом файле и запусти тесты: npm test');
}
