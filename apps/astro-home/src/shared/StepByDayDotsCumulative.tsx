import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'
import { dateAndSteps } from './utils/csv'

type Props = {
  csvData: string
}

export default function StepByDayChart({ csvData }: Props) {
  const data = csvParse(csvData, dateAndSteps).filter((d) => d.steps > 0)
  return data.length > 0 ? (
    <>
      <PlotChart
        options={{
          marginLeft: 60,
          width: 450,
          height: 300,
          x: {
            grid: true,
            transform: (d: string) => new Date(d + 'Z'),
            type: 'utc',
            interval: 'day',
          },
          marks: [
            Plot.dotY(
              data,
              Plot.mapY('cumsum', { y: 'steps', x: 'date', fill: 'white' })
            ),
          ],
          style: {
            background: '#4444',
            padding: '0 10px 10px',
          },
        }}
      />
    </>
  ) : null
}
