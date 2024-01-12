import { createDefaultMonths } from './create-default-months';

export const createTagCounts = (data) => {
  const yearsSet = new Set();

  const tags = data.reduce((items, item) => {
    const year = new Date(item.fields.date).getFullYear();
    yearsSet.add(year);
    const month = new Date(item.fields.date).toLocaleString('en-US', { month: 'short' });

    item.fields.tags.forEach((tag) => {
      items[tag] = items[tag] || {
        name: tag,
        total: 0,
        years: {},
      };

      items[tag].total++;
      items[tag].years[year] = items[tag].years[year] || createDefaultMonths();
      items[tag].years[year].forEach((entry) => {
        if (!entry.count) {
          entry.count = 0;
        }
      });
      items[tag].years[year][items[tag].years[year].findIndex((entry) => entry.month === month)].count++;
    });

    return items;
  }, {});

  const yearsArray = Array.from(yearsSet);

  Object.values(tags).forEach((tag) => {
    tag.years = yearsArray.reduce((acc, year) => {
      acc[year] = tag.years[year] || createDefaultMonths();
      return acc;
    }, {});
  });

  return Object.values(tags);
};
