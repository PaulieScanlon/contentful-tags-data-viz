export const getValuesRange = (minValue, maxValue) => {
  const count = maxValue - minValue + 1;
  return Array.from({ length: count }, (_, index) => minValue + index);
};
