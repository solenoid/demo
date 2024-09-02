import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'
import { dateAndSteps } from './utils/csv'

type Props = {
  csvData: string
  csvGoalData: string
  dateExtent: Readonly<[string, string]>
}

export default function StepByDayChart({
  csvData,
  csvGoalData,
  dateExtent,
}: Props) {
  const data = csvParse(csvData, dateAndSteps).filter((d) => d.steps > 0)
  const latest = dateExtent[1]
  const goalData = csvParse(csvGoalData.replace('LATEST', latest), dateAndSteps)

  return data.length > 0 ? (
    <>
      <PlotChart
        options={{
          marginLeft: 60,
          width: 450,
          height: 250,
          color: {
            scheme: 'Cool',
          },
          x: {
            grid: true,
            transform: (d: string) => new Date(d + 'Z'),
            type: 'utc',
            interval: 'day',
            domain: dateExtent,
          },
          y: {
            domain: [0, 15_000], // TODO consider having a yearly max API
          },
          marks: [
            // Daily dots
            Plot.dotY(data, { y: 'steps', x: 'date', stroke: 'steps' }),

            // Goal line
            Plot.lineY(goalData, {
              y: 'steps',
              x: 'date',
              stroke: '#999c',
              curve: 'step-after',
            }),

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
    </>
  ) : null
}
