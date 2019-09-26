export let ALPHABET = '23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';

export default (length: number = 10) => {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += ALPHABET.substr(Math.floor(Math.random() * ALPHABET.length), 1);
  }
  return s;
};
