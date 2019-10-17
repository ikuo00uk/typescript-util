// tslint:disable:no-expression-statement
import test from 'ava';
import { floatFormat } from './math';

test('floatFormat', t => {
  t.is(floatFormat(3.141925, 2), 3.14);
});
