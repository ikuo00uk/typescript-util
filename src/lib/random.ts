/**
 * ランダムに数字を取得する
 *
 * ### Example
 * ```js
 * import { getRandomInt } from './random'
 * console.log(getRandomInt(0,100))
 * // => 0~100までの間でランダムな数字
 * ```
 *
 * @param min: 最小値
 * @param max: 最大値
 * @return ランダム数字
 *
 */
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * 無作為にユーザーIDを生成する(SNSなどの)
 *
 * ### Example (es module)
 * ```js
 * import { generateRandomUserId } from './random'
 * console.log(generateRandomUserId(8))
 * // => 8桁のランダムユーザー名
 * ```
 *
 * @param l: 生成したい文字列
 * @return string ランダム文字列
 *
 */
const generateRandomUserId = (l: number = 8): string => {
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789_';
  const cl = c.length;
  let _id = '';
  for (let i = 0; i < l; i++) {
    _id += c[Math.floor(Math.random() * cl)];
  }
  return _id;
};

/**
 * 配列をシャッフルして返す
 *
 * @param array シャッフルしたい配列
 * @return array
 */
const shuffle = (array: any[]) => {
  let a = array;
  let i = a.length;
  while (i) {
    const j = Math.floor(Math.random() * i);
    const t = a[--i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
};

export { generateRandomUserId, getRandomInt, shuffle };
