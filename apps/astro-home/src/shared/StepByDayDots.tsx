import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'
import { dateAndSteps } from './utils/csv'

type Props = {
  csvData: string
  csvGoalData: string
}

export default function StepByDayChart({ csvData, csvGoalData }: Props) {
  const data = csvParse(csvData, dateAndSteps).filter((d) => d.steps > 0)

  // TODO pull this into a different component for total sum and maybe relate to goal changes too
  const total = data.map((d) => d.steps).reduce((memo, cur) => memo + cur, 0)
  const dates = data.map((d) => d.date).toSorted()
  const earliest = dates[0]
  const latest = dates.toReversed()[0]

  const goalData = csvParse(csvGoalData.replace('LATEST', latest), dateAndSteps)

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
            domain: [0, 15_000], // TODO consider having a yearly max API
          },
          marks: [
            // Goal line
            Plot.lineY(goalData, {
              y: 'steps',
              x: 'date',
              stroke: '#9999',
              curve: 'step-after',
            }),

            // Daily dots
            Plot.dotY(data, { y: 'steps', x: 'date', stroke: 'steps' }),

            // Rolling 28 day (4 week) average per day
            Plot.lineY(
              data,
              Plot.windowY({ k: 28 }, { x: 'date', y: 'steps' })
            ),
          ],
          style: {
            background: '#4444',
            padding: '0 10px 10px',
          },
        }}
      />
      <p>
        {total?.toLocaleString()} total steps from {earliest} through {latest}
      </p>
    </>
  ) : null
}
