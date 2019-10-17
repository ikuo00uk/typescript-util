/**
 * 任意の小数点で繰り上げる
 * ### Example
 * ```js
 * import { floatFormat } from './math'
 * console.log(floatFormat(3.141925,2))
 * // => 3.14
 * ```
 * @param targetNumber 対象数字
 * @param n 小数点何位か
 * @return number
 */

const floatFormat = (targetNumber: number, n: number): number => {
  const _pow = Math.pow(10, n);
  return Math.round(targetNumber * _pow) / _pow;
};

export { floatFormat };
