// tslint:disable:no-expression-statement
import test from 'ava';
import {
  generateRandomUserId,
  getRandomInt,
  regenerateArray,
  shuffle
} from './random';

test('generateRandomUserId', t => {
  const uid = generateRandomUserId(10);
  t.true(typeof uid === 'string');
});

test('getRandomInt', t => {
  t.true(typeof getRandomInt(0, 100) === 'number');
});

test('regenerateArray', t => {
  t.true(typeof regenerateArray([1, 2, 3, 4, 5], 2) === 'object');
});

test('shuffle', t => {
  t.true(typeof shuffle([1, 2, 3, 4, 5]) === 'object');
});
