function PrincessError(type, text, etc) {
  let e = new Error(text);
  e.type = type;
  e.etc = etc;
  return e;
}

module.exports = PrincessError;
