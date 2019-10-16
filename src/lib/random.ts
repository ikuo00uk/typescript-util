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
 * 配列を一定の長さで再生成する
 *
 * ### Example
 * ```js
 * import { regenerateArray } from './random'
 * console.log(regenerateArray([0,1,2,3,4,5],2)))
 * // => 2インデックスで、新しい配列が生成される。
 * ```
 *
 * @param array: 配列
 * @param num: インデックス
 * @return 再生成した配列
 */
const regenerateArray = (array: readonly any[], num: number): readonly any[] => {
  const a = array;
  let t: any[] = [];
  let r: any[] = [];
  let l = a.length;
  let n = num < l ? num : l;
  while (n-- > 0) {
    const i = (Math.random() * l) || 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
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
 * @returns ランダム文字列
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

export { generateRandomUserId, getRandomInt, regenerateArray, shuffle };
