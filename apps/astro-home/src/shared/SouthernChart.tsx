import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'
import { localDate } from './utils/date'

type Props = {
  maxY: number
  minX: number
  maxX: number
  csvData: string
}

export default function SouthernChart({ maxY, minX, maxX, csvData }: Props) {
  const data = csvParse(csvData, (row) => {
    return {
      ...row,
      date: localDate(row.date),
    }
  })
  return data.length > 0 ? (
    <PlotChart
      options={{
        x: {
          domain: [minX, maxX],
          type: 'time',
          ticks: 10,
          // tickFormat: '%b %y',
          label: 'Sample Date →',
          labelOffset: 35,
        },
        y: {
          domain: [0, maxY],
          grid: true,
          label: '↑ South System Copies / mL',
        },
        width: 1000,
        height: 250,
        margin: 45,
        marks: [
          Plot.dot(data, {
            x: 'sampleDate',
            y: 'southernCopies',
            fill: '#8406',
          }),
          Plot.line(data, {
            x: 'sampleDate',
            y: 'southern7DayAvg',
          }),
        ],
        style: {
          background: '#4444',
          padding: '0 10px 10px',
        },
      }}
    />
  ) : null
}
