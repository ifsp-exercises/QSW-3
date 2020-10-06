import { expect, it } from './util/test';
console.clear();

import sum from './sum';

it('should be able to sum two values', () => {
  expect(sum(1, 2)).toBe(3);
});

it('should be able to sum two values', () => {
  expect(sum(3, 9)).toBe(12);
});


it('should be able to sum two values', () => {
  expect(sum(12, 8)).toBe(20);
});

