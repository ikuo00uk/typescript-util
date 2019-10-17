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

/**
 *
 * 3桁区切り
 * ### Example
 * ```js
 * import { separteNum } from './math'
 * console.log(separteNum(1000))
 * // => 1,000
 * ```
 *
 * @param number 区切りたい数字
 * @return string
 */

const separateNum = (n: number): string => {
  return String(Math.floor(n)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

interface Props {
  readonly array: any[];
}

/**
 * 数字配列に関するサポート
 */
class ArrayMathSupport {
  /**
   * [max 配列の最大値を返すよ]
   * @param  {[type]} array [eg [1,2,3,4] ]
   * @return {[type]}       [ max number]
   */
  public static max(array: Props['array']): number {
    return Math.max.apply(null, array);
  }
  /**
   * [min 配列の最小値を返すよ]
   * @param  {[type]} array [eg [1,2,3,4] ]
   * @return {[type]}       [ min number]
   */
  public static min(array: Props['array']): number {
    return Math.min.apply(null, array);
  }
  /**
   * [sum 配列の合計値を返すよ]
   * @param  {[type]} array [eg [1,2,3,4] ]
   * @return {[type]}       [ sum number]
   */
  public static sum(array: Props['array']): number {
    return array.reduce((x, y) => {
      return x + y;
    });
  }
  /**
   * [average 配列の合計の平均を返すよ]
   * @param  {[type]} array [eg [1,2,3,4] ]
   * @return {[type]}       [ ave number]
   */
  public static average(array: Props['array']): number {
    const sum = this.sum(array);
    return sum / array.length;
  }
}

export { floatFormat, separateNum, ArrayMathSupport };
