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

export default function NorthernChart({ maxY, minX, maxX, csvData }: Props) {
  const data = csvParse(csvData, (row) => {
    return {
      ...row,
      sampleDate: localDate(row.sampleDate),
    } as { [col: string]: string | undefined }
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
          label: '↑ North System Copies / mL',
        },
        width: 1000,
        height: 250,
        margin: 45,
        marks: [
          Plot.dot(
            data.filter((d) => d.northernCopies),
            {
              x: 'sampleDate',
              y: 'northernCopies',
              fill: '#0806',
            }
          ),
          Plot.line(data, {
            x: 'sampleDate',
            y: 'northern7DayAvg',
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
