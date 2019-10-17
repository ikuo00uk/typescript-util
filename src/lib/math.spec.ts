// tslint:disable:no-expression-statement
import test from 'ava';
import { ArrayMathSupport, floatFormat, separateNum } from './math';

test('floatFormat', t => {
  t.is(floatFormat(3.141925, 2), 3.14);
});

test('separateNum', t => {
  t.is(separateNum(100000), '100,000');
});

test('ArrayMathSupport', t => {
  const a = [1, 2, 3, 4, 5];
  t.is(ArrayMathSupport.max(a), 5);
  t.is(ArrayMathSupport.min(a), 1);
  t.is(ArrayMathSupport.sum(a), 15);
  t.is(ArrayMathSupport.average(a), 3);
});
