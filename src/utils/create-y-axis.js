export const createYAxis = (data, chartHeight, paddingL, paddingTop, paddingBottom) => {
  const yAxis = data.map((item, index) => {
    const y_ratio = index / (data.length - 1);
    const y = chartHeight - y_ratio * (chartHeight - paddingTop - paddingBottom);

    return { value: item, x: paddingL, y: y - paddingBottom };
  });

  return yAxis.sort((a, b) => b.value - a.value);
};
