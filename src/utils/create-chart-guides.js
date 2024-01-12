export const createChartGuides = (data, chartWidth, chartHeight, paddingL, paddingR, paddingTop, paddingBottom) => {
  const xAxis = data.map((_, index) => {
    const width = chartWidth - paddingR - paddingL;

    const y_ratio = index / (data.length - 1);
    const y = chartHeight - y_ratio * (chartHeight - paddingTop - paddingBottom);

    return {
      x: paddingL,
      y: y - paddingBottom,
      width: width,
    };
  });

  return xAxis;
};
