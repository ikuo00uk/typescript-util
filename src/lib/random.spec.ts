// tslint:disable:no-expression-statement
import test from 'ava';
import { generateRandomUserId, getRandomInt, shuffle } from './random';

test('generateRandomUserId', t => {
  const uid = generateRandomUserId(8);
  t.true(typeof uid === 'string');
  t.is(generateRandomUserId(-1), '');
  t.is(generateRandomUserId(1.23).length, 2);
});

test('getRandomInt', t => {
  t.true(typeof getRandomInt(0, 100) === 'number');
});

test('shuffle', t => {
  t.deepEqual(shuffle([1]), [1]);
  t.true(typeof shuffle([1, 2, 3, 4, 5]) === 'object');
});
