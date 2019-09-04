import makeRandomId from './make-random-id';

export default () => {
  if (!(global as any).$$__PrincessWindowId) {
    (global as any).$$__PrincessWindowId = 'w:' + makeRandomId();
  }
  return (global as any).$$__PrincessWindowId;
};
