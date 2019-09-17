let ALPHABET = '23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';

let makeId = (length = 10) => {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += ALPHABET.substr(Math.floor(Math.random() * ALPHABET.length), 1);
  }
  return s;
};

function makeRandomIdWithType(t, length) {
  return t + '_' + makeId(length);
}

module.exports = {
  makeId,
  ALPHABET,
  makeRandomIdWithType,
};
