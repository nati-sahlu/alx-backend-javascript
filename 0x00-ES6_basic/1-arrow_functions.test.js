import { add, greet } from './1-arrow_functions.js';

test('add adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('greet returns greeting with name', () => {
  expect(greet('Natan')).toBe('Hello, Natan!');
});

test('greet returns default greeting when no name', () => {
  expect(greet()).toBe('Hello, Guest!');
});

