import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'

type Props = {
  csvData: string
}

export default function StepByDayChart({ csvData }: Props) {
  const allData = csvParse(csvData, (row) => {
    return {
      ...row,
      steps: Number(row.steps),
    } as { [col: string]: number | string | undefined }
  }).filter((d) => (d.steps as number) > 0)

  const data = allData
  const dates = data.map((d) => d.date).toSorted()
  const earliest = dates[0]
  const latest = dates[dates.length - 1]
  const total = data
    .map((d) => d.steps as number)
    .reduce((memo, cur) => memo + cur, 0)

  return data.length > 0 ? (
    <>
      <p>
        {total?.toLocaleString()} total steps from {earliest} through {latest}
      </p>
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
