export const createLineChartPoints = (
  data,
  chartWidth,
  chartHeight,
  maxValue,
  paddingL,
  paddingR,
  paddingTop,
  paddingBottom
) => {
  const flatData = Object.values(data).flat();

  const results = flatData.map((data, index) => {
    const { count } = data;

    const x_ratio = index / (flatData.length - 1);
    const y_ratio = count / maxValue;
    const x = x_ratio * (chartWidth - paddingR - paddingL);
    const y = chartHeight - y_ratio * (chartHeight - paddingTop - paddingBottom);

    return `${x + paddingL},${y - paddingBottom}`;
  });

  return results;
};
