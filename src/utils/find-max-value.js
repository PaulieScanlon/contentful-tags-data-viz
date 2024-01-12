export const findMaxValue = (data) => {
  const maxValue = data.reduce((items, item) => {
    return Math.max(
      items,
      ...Object.values(item.years).map((year) => {
        const maxCount = year.reduce((items, item) => {
          return Math.max(items, item.count);
        }, 0);
        return maxCount;
      })
    );
  }, 0);

  return maxValue;
};
