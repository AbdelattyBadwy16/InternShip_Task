import React from 'react'
import './chart.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: "jan",
    income: 3000,
    outcome: 5000
  },
  {
    name: "Feb",
    income: 5000,
    outcome: 4000
  },
  {
    name: "Mar",
    income: 6000,
    outcome: 3000
  },
  {
    name: "Api",
    income: 5000,
    outcome: 4000
  },
  {
    name: "May",
    income: 4000,
    outcome: 2000
  },
  {
    name: "Jun",
    income: 6400,
    outcome: 3200
  },
]

function Chart() {

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  return (
    <div className='chart-cont'>
      <div className='char-info'>
        <h1>Analytics</h1>
        <select>
          <option value="">2024</option>
          <option value="">2023</option>
        </select>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            width={1100}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="name"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${"#a8b2d5"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${"#a8b2d5"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="income"
              fill="#cd3bff"
              barSize={14}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="outcome"
              fill="#0f42fc"
              barSize={14}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart