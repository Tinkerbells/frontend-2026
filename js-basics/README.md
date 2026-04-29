# Базовая практика JavaScript

Простые задачки на отдельные механизмы JS, которые пригодятся при разработке игр **Камень, Ножницы, Бумага** и **Угадай Число**.

## Файлы проекта

- **`src/practice.js`** — открой этот файл и реализуй функции
- **`src/practice.solution.js`** — готовое решение (если застрял — загляни сюда)
- **`tests/practice.test.js`** — тесты, которые проверят правильность твоего кода
- **`package.json`** — настройки проекта

## Что нужно сделать

Открой файл `src/practice.js`. Там уже есть функции, но они пустые. Реализуй их по порядку — от простых к сложным.

После каждого изменения запускай тесты командой:

```bash
npm test
```

Тесты подскажут, что работает, а что ещё нужно доделать.

## Темы и функции

### 1. Функции и `return`
- **`greet(name)`** — возвращает строку `Привет, {name}!`
- **`sum(a, b)`** — возвращает сумму двух чисел
- **`double(x)`** — возвращает число, умноженное на 2

### 2. Условия `if/else`
- **`isPositive(number)`** — возвращает `true`, если число больше 0, иначе `false`
- **`getMax(a, b)`** — возвращает большее из двух чисел

### 3. Сравнение чисел (основа для «Угадай число»)
- **`compareNumbers(a, b)`** — возвращает `'greater'`, `'less'` или `'equal'`

### 4. Массивы и случайный выбор (основа для «Камень, ножницы, бумага»)
- **`getRandomElement(items)`** — возвращает случайный элемент из массива
- **`contains(items, item)`** — проверяет, есть ли элемент в массиве (`true`/`false`)

### 5. Проверка данных (валидация)
- **`isValidInteger(value)`** — возвращает `true`, если `value` — целое число

### 6. Объекты
- **`createPerson(firstName, lastName, age)`** — создаёт и возвращает объект `{ firstName, lastName, age }`
- **`getFullName(person)`** — возвращает строку `"{firstName} {lastName}"`

### 7. Составные условия (основа для «Камень, ножницы, бумага»)
- **`canBeat(attacker, defender)`** — возвращает `true`, если `attacker` побеждает `defender` по правилам:
  - `rock` бьёт `scissors`
  - `scissors` бьёт `paper`
  - `paper` бьёт `rock`

## Полезные темы для решения

Если что-то непонятно, посмотри на [learn.javascript.ru](https://learn.javascript.ru/):

- [Переменные](https://learn.javascript.ru/variables)
- [Функции](https://learn.javascript.ru/function-basics)
- [Условия: if, '?'](https://learn.javascript.ru/ifelse)
- [Логические операторы](https://learn.javascript.ru/logical-operators)
- [Операторы, математика](https://learn.javascript.ru/operators)
- [Массивы](https://learn.javascript.ru/array)
- [Методы массивов](https://learn.javascript.ru/array-methods)
- [Объекты](https://learn.javascript.ru/object)
- [Типы данных](https://learn.javascript.ru/types)
