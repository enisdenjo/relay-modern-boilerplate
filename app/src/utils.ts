/**
 * utils
 */

import set from 'lodash/set';

/** Returns a random string with 8 characters. */
export const randomString = () =>
  Math.random()
    .toString(32)
    .substr(2, 10);

/** Makes an object out of named form elements. */
export const extractFormValues = <V extends object>(form: HTMLFormElement): V => {
  const { elements } = form;

  const values = {};

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLInputElement;
    if (element.name) {
      set(values, element.name, element.value || null);
    }
  }

  return values as V;
};
