/**
 *
 * global.d
 *
 * Holds global TypeScript definitions.
 *
 */

// allow importing `*.svg` files using Webpack's `file-loader`
declare module '*.svg' {
  const content: string;
  export default content;
}
