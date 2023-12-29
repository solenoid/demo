import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'
import { localDate } from './utils/date'

type Props = {
  minY: number
  maxY: number
  minX: number
  maxX: number
  data: string
}

export default function UpliftChart({ minY, maxY, minX, maxX, data }: Props) {
  const parsedData = csvParse(data, (row) => {
    return {
      ...row,
      date: localDate(row.date),
    } as { [col: string]: string | undefined }
  })
  return parsedData.length > 0 ? (
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
          domain: [minY, maxY],
          grid: true,
          label: '↑ Up [mm]',
        },
        width: 976,
        height: 400,
        margin: 35,
        marks: [
          Plot.dot(parsedData, {
            x: 'date',
            y: 'dU',
            fill: '#c40c',
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
