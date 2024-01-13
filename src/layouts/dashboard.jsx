import { component$, useStore, $ } from '@builder.io/qwik';

const Dashboard = component$(
  ({
    dateStart,
    dateEnd,
    paddingL,
    paddingR,
    chartData,
    chartWidth,
    chartHeight,
    chartXAxis,
    chartYAxis,
    chartGuides,
  }) => {
    const fontSize = 20;
    const selectedValues = useStore(['gatsby', 'next-js', 'astro', 'remix', 'qwik']);

    const handleChange = $((event) => {
      const {
        target: { value, checked },
      } = event;

      if (checked) {
        selectedValues.push(value);
      } else {
        const indexToRemove = selectedValues.indexOf(value);

        if (indexToRemove !== -1) {
          selectedValues.splice(indexToRemove, 1);
        }
      }
    });

    return (
      <div class='relative flex'>
        <aside class='fixed w-72 shadow-lg h-screen overflow-scroll'>
          <div class='pl-4 pr-6 pb-8'>
            <div class='pt-6'>
              <img alt='Contentful Logo' src='/contentful-logo.svg' class='w-32' />
            </div>
            <hr class='my-4' />
            <ul class='flex flex-col gap-1'>
              {chartData.map((item, index) => {
                const { id, color, name, total } = item;
                const isChecked = selectedValues.includes(id);

                return (
                  <li key={index} class='p-2 transition-colors duration-300 hover:bg-gray-100'>
                    <label class='flex gap-2 items-center text-xs cursor-pointer'>
                      <input
                        type='checkbox'
                        value={id}
                        checked={isChecked}
                        onChange$={handleChange}
                        class='cursor-pointer'
                      />
                      <div class='flex items-center justify-between w-full'>
                        <span class='font-medium select-none'>{name}</span>
                        <span
                          class='flex items-center justify-center text-white rounded-full w-5 h-5 bg-gray-200'
                          style={{
                            backgroundColor: isChecked ? color : null,
                          }}
                        >
                          {total}
                        </span>
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <section class='ml-72 w-full h-full min-h-screen bg-gray-50'>
          <div class='p-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              class='bg-white shadow'
            >
              {chartGuides.map((data, index) => {
                const { x, y, width } = data;
                return <rect key={index} x={x} y={y} width={width} height={2} class='fill-gray-200' />;
              })}

              {chartData.map((data, index) => {
                const { id, color, points } = data;
                const isVisible = selectedValues.includes(id);

                return (
                  <polyline
                    key={index}
                    points={points}
                    style={{
                      display: isVisible ? '' : 'none',
                      fill: 'none',
                      strokeWidth: 3,
                      stroke: color,
                    }}
                  />
                );
              })}

              {chartXAxis.map((data, index) => {
                const { date, x, y } = data;
                return (
                  <text
                    key={index}
                    x={x + fontSize / 2}
                    y={y}
                    text-anchor='start'
                    class='fill-gray-400'
                    style={{
                      fontSize: fontSize,
                      transform: 'rotate(90deg)',
                      transformBox: 'content-box',
                    }}
                  >
                    {date}
                  </text>
                );
              })}

              {chartYAxis.map((data, index) => {
                const { value, x, y } = data;

                return (
                  <text
                    key={index}
                    x={x}
                    y={y + fontSize / 2}
                    text-anchor='start'
                    class='fill-gray-400'
                    style={{
                      fontSize: fontSize,
                    }}
                  >
                    {value}
                  </text>
                );
              })}

              <text
                x={paddingL}
                y={110}
                text-anchor='start'
                class='fill-gray-600 font-bold'
                style={{
                  fontSize: 60,
                }}
              >
                Tags Usage
              </text>
              <text
                x={paddingL}
                y={160}
                text-anchor='start'
                class='fill-gray-600'
                style={{
                  fontSize: 30,
                }}
              >
                https://paulie.dev
              </text>
              <text
                x={chartWidth - paddingR}
                y={160}
                text-anchor='end'
                class='fill-gray-600'
                style={{
                  fontSize: 30,
                }}
              >
                <tspan>{`${dateStart.month}, ${dateStart.year}`}</tspan>
                <tspan>{` - ${dateEnd.month}, ${dateEnd.year}`}</tspan>
              </text>
            </svg>
          </div>
        </section>
      </div>
    );
  }
);

export default Dashboard;
