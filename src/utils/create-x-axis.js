export const createXAxis = (data, chartWidth, chartHeight, paddingL, paddingR, paddingBottom) => {
  const flatData = Object.values(data).flat();

  const xAxis = flatData.map((item, index) => {
    const { month, year } = item;

    const x_ratio = index / (flatData.length - 1);

    const x = x_ratio * (chartWidth - paddingR - paddingL);
    const y = chartHeight;

    return { date: `${month} ${year}`, x: x + paddingL, y: y - paddingBottom };
  });

  return xAxis;
};
