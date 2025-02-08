import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'
import { Temporal } from '@js-temporal/polyfill'

import { csvParse } from 'd3'
import { dateAndWeight } from './utils/csv'

const dateWip = (date: string): Temporal.PlainDate => {
  try {
    return Temporal.PlainDate.from(date)
  } catch (err) {
    console.error(err)
  }
  return undefined as unknown as Temporal.PlainDate
}
const aboveZero = (d: { weight: number }) => d.weight > 0

type Props = {
  csvData: string
  csvGoalData: string
}

export default function WeightByDayChart({ csvData, csvGoalData }: Props) {
  const data = csvParse(csvData, dateAndWeight).filter(aboveZero)
  const goalData = csvParse(csvGoalData, dateAndWeight)
  const projectionStart = data[data.length - 1]
  const projectionEnd = goalData[goalData.length - 1]
  const projectStartDate = dateWip(projectionStart.date)
  const projectEndDate = dateWip(projectionEnd.date)
  const earliest = data[0].date
  const latest = projectEndDate.toString()
  const dateExtent = [earliest, latest] as const
  const projectStartWeight = projectionStart.weight
  const projectEndWeight = projectionEnd.weight
  const weightUntilGoal = projectStartWeight - projectEndWeight
  const daysUntilGoal = projectStartDate.until(projectEndDate).days
  const perDayDrop = weightUntilGoal / daysUntilGoal
  const projection = []
  for (let i = 1; i <= daysUntilGoal; i++) {
    const date = projectStartDate.add({ days: i }).toString()
    const weight = projectStartWeight - i * perDayDrop
    projection.push({ date, weight })
  }
  const windowK = 7
  return data.length > 0 ? (
    <>
      <PlotChart
        options={{
          marginLeft: 30,
          width: 450,
          height: 300,
          color: {
            scheme: 'GnBu',
          },
          x: {
            grid: true,
            transform: (d: string) => new Date(d + 'Z'),
            type: 'utc',
            interval: 'day',
            domain: dateExtent,
          },
          y: {
            domain: [200, 245],
          },
          marks: [
            // Daily dots
            Plot.dotY(data, { y: 'weight', x: 'date', stroke: 'weight' }),

            // Rolling average per day purple outline
            Plot.lineY(data, {
              ...Plot.windowY({ k: windowK }, { x: 'date', y: 'weight' }),
              stroke: '#743095',
              strokeWidth: 10,
              strokeOpacity: 0.75,
            }),

            // Rolling average per day highlight
            Plot.lineY(data, {
              ...Plot.windowY({ k: windowK }, { x: 'date', y: 'weight' }),
              stroke: '#fff',
              strokeWidth: 7,
              strokeOpacity: 0.75,
            }),

            // Projection to goal dashed
            Plot.lineY(projection, {
              x: 'date',
              y: 'weight',
              strokeDasharray: [1, 8],
              stroke: '#fff',
              strokeWidth: 1,
              strokeOpacity: 0.75,
            }),
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
