import { csvParse } from 'd3'
import { parseDate } from './date'

const numberOrAbsent = (
  inName: string,
  outName: string,
  input: { [key: string]: string | undefined }
) => (input[inName] ? { [outName]: Number(input[inName]) } : {})

type rowType = {
  sampleDate: string
  northernCopies?: number
  southernCopies?: number
  northern7DayAvg?: number
  southern7DayAvg?: number
}

export const parseCsvData = (csv: string, earliestDate: string) =>
  csvParse(csv, (row) => {
    return {
      sampleDate: parseDate(row['Sample Date']),
      ...numberOrAbsent('Northern (copies/mL)', 'northernCopies', row),
      ...numberOrAbsent('Southern (copies/mL)', 'southernCopies', row),
      ...numberOrAbsent('Northern 7 day avg', 'northern7DayAvg', row),
      ...numberOrAbsent('Southern 7 day avg', 'southern7DayAvg', row),
    } as rowType
  }).filter(
    (d) =>
      (d.northernCopies || d.southernCopies) &&
      // drop dates that are farther in the past
      earliestDate <= d.sampleDate
  )
