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

  return data.length > 0 ? (
    <>
      <PlotChart
        options={{
          marginLeft: 60,
          width: 450,
          height: 300,
          color: {
            scheme: 'Cool',
          },
          x: {
            grid: true,
            transform: (d: string) => new Date(d + 'Z'),
            type: 'utc',
            interval: 'day',
          },
          y: {
            domain: [0, 10_000],
          },
          marks: [
            // Goal line, TBD if always rule or not
            Plot.ruleY([5000]),

            // Daily dots
            Plot.dotY(data, { y: 'steps', x: 'date', stroke: 'steps' }),

            // Rolling 14 day average
            Plot.lineY(
              data,
              Plot.windowY({ k: 14 }, { x: 'date', y: 'steps' })
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
