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
 **/
const generateRandomUserId = (l: number = 8): string => {
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789_'
  const cl = c.length
  let _id = '';
  for (let i = 0; i < l; i++) {
    _id += c[Math.floor(Math.random() * cl)]
  }
  return _id
}

export { generateRandomUserId }