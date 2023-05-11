import * as fs from 'fs'
import { getUserCountrySelection } from './questions'
import { getCountryHolidays } from './api'
import { getDaysUntil, isWeekend } from './utils'

const DATA_DIR = 'output'
const DATA_HEADERS = ['Name', 'Date', 'Days Until', 'Weekend']

const main = async (): Promise<string> => {
  // prompt user for country input
  const userCountry = await getUserCountrySelection()

  // fetch holidays from api
  const holidaysRes = await getCountryHolidays(userCountry.countryCode)

  // parse holidays into desired fields for output file
  const outputData: OutputData = holidaysRes.map((e) => ({
    name: e.name ?? '',
    date: e.date,
    daysUntil: getDaysUntil(e.date) ?? '',
    weekend: isWeekend(e.date) ? 'Yes' : 'No'
  }))

  // parse output into csv-friendly format
  const csvData = [
    DATA_HEADERS.join(','),
    ...outputData.map((e) => [
      e.name,
      e.date, 
      e.daysUntil, 
      e.weekend
    ].join(','))
  ].join('\n')

  // create output dir if it doesn't exist
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR)

  // write the data file to the data directory
  const filePath = `${DATA_DIR}/${userCountry.name}_holidays_2023.csv`
  fs.writeFileSync(filePath, csvData, 'utf-8')

  return filePath
}

// execute the operation
main()
  .then((filePath) => 
    console.log(`Operation complete! File can be found in ./${filePath}`)
  )
  .catch((err) => 
    console.error('Something went wrong!', err)
  )
  .then(() => console.log())
