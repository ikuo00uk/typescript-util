// tslint:disable:no-expression-statement
import test from 'ava';
import { generateRandomUserId } from './random';

test(
  'generateRandomUserId', t => {
    const uid =generateRandomUserId(10);
    console.log(uid);
    t.true(typeof uid == 'string');
});