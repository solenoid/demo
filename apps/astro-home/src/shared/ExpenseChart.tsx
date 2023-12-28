import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse } from 'd3'
import { parseDate, localDate } from './utils/date'

type Props = {
  csvData: string
}

export default function ExpenseChart({ csvData }: Props) {
  const allData = csvParse(csvData, (row) => {
    return {
      ...row,
      amount: Number(row.amount),
      date: localDate(parseDate(`${row.date}/2023`)),
    } as { [col: string]: number | string | undefined }
  })

  const data = allData

  return data.length > 0 ? (
    <PlotChart
      options={{
        marginLeft: 100,
        x: { grid: true },
        y: { label: null },
        marks: [
          Plot.barX(
            data,
            Plot.groupY(
              { x: 'sum' },
              { y: 'cat', x: 'amount', sort: { y: 'x', order: 'descending' } }
            )
          ),
          Plot.ruleX([0]),
        ],
        style: {
          background: '#4444',
          padding: '0 10px 10px',
        },
      }}
    />
  ) : null
}
