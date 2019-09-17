import makeRandomId from './make-random-id';

export default () => {
  if (!(global as any).$$__PrincessWindowId__$$) {
    (global as any).$$__PrincessWindowId__$$ = 'w:' + makeRandomId();
  }
  return (global as any).$$__PrincessWindowId__$$;
};
