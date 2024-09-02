import { csvParse } from 'd3'
import { dateAndSteps } from './utils/csv'

type Props = {
  csvData: string
}

export default function StepTotal({ csvData }: Props) {
  const data = csvParse(csvData, dateAndSteps).filter((d) => d.steps > 0)

  const total = data.map((d) => d.steps).reduce((memo, cur) => memo + cur, 0)
  const dates = data.map((d) => d.date).toSorted()
  const earliest = dates[0]
  // NOTE latest is last day there is data, not first day of next month like for charts
  const latest = dates.toReversed()[0]

  return data.length > 0 ? (
    <p>
      {total?.toLocaleString()} total steps from {earliest} through {latest}
    </p>
  ) : null
}
