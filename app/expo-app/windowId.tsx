import makeRandomId from './makeRandomId';

export default () => {
  if (!(global as any).$$__PrincessWindowId__$$) {
    (global as any).$$__PrincessWindowId__$$ = 'w:' + makeRandomId();
  }
  return (global as any).$$__PrincessWindowId__$$;
};
