import * as Plot from '@observablehq/plot'
import PlotChart from './PlotChart'

import { csvParse, sum } from 'd3'
import { dateAndSteps } from './utils/csv'

type Props = {
  csvData: string
  dateExtent: Readonly<[string, string]>
}

export default function StepByMonthBars({ csvData, dateExtent }: Props) {
  const data = csvParse(csvData, dateAndSteps).filter((d) => d.steps > 0)

  return data.length > 0 ? (
    <>
      <PlotChart
        options={{
          marginLeft: 60,
          width: 450,
          height: 300,
          x: {
            transform: (d: string) => new Date(d + 'Z'),
            type: 'utc',
            domain: dateExtent,
          },
          marks: [
            Plot.rectY(
              data,
              Plot.binX(
                { y: 'mean' },
                {
                  x: { thresholds: 'month', value: 'date' },
                  y: 'steps',
                }
              )
            ),
            Plot.text(
              data,
              Plot.binX(
                { y: 'mean' },
                {
                  x: { thresholds: 'month', value: 'date' },
                  y: 'steps',
                  dy: -8,
                  text: (data: any) => {
                    return (
                      (
                        sum(data.map((datum: any) => datum.steps)) /
                        data.length /
                        1000
                      ).toFixed(1) + 'k'
                    )
                  },
                }
              )
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
