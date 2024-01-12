export const createDefaultMonths = () => {
  const monthsArray = Array.from({ length: 12 }, (_, index) => {
    return new Date(2000, index, 1).toLocaleString('en-US', { month: 'short' });
  }).map((month) => {
    return { month, count: 0 };
  });

  return monthsArray;
};
