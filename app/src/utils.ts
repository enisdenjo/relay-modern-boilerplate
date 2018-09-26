/**
 * utils
 */

/** Returns a random string with 8 characters. */
export const randomString = () =>
  Math.random()
    .toString(32)
    .substr(2, 10);
