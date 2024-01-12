export const createChartDates = (data) => {
  const years = Object.keys(data);

  const dates = Object.values(data)
    .map((year, index) => {
      return year.map((data) => {
        const { month } = data;
        return {
          month,
          year: years[index],
        };
      });
    })
    .flat();

  return dates;
};
