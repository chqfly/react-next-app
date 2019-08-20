const delay = (time: number): Promise<void> =>
  new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, time);
  });

export default delay;
