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

type upliftRowType = {
  date: string
  dN: number
  DN: number
  dE: number
  DE: number
  dU: number
  DU: number
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

export const parseUpliftCsvData = (csv: string, earliestDate: string) =>
  csvParse(csv, (row) => {
    return {
      date: row.date.replaceAll('/', '-'),
      ...numberOrAbsent('dN[mm]', 'dN', row),
      ...numberOrAbsent('DN[mm]', 'DN', row),
      ...numberOrAbsent('dE[mm]', 'dE', row),
      ...numberOrAbsent('DE[mm]', 'DE', row),
      ...numberOrAbsent('dU[mm]', 'dU', row),
      ...numberOrAbsent('DU[mm]', 'DU', row),
    } as upliftRowType
  }).filter(
    (d) =>
      // drop dates that are farther in the past
      earliestDate <= d.date
  )

/**
 * Returns steps as a number and date as a string assuming incoming strings for both.
 */
export const dateAndSteps = (row: { [key: string]: string }) => {
  return {
    date: row.date ?? '',
    steps: Number(row.steps),
  }
}

/**
 * Returns weight as a number and date as a string assuming incoming strings for both.
 */
export const dateAndWeight = (row: { [key: string]: string }) => {
  return {
    date: row.date ?? '',
    weight: Number(row.weight),
  }
}
