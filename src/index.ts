import * as fs from 'fs'
import { getUserCountrySelection } from './questions'
import { getCountryHolidays } from './api'

const DATA_DIR = 'output'
const DATA_HEADERS = ['Name', 'Date', 'Days Until', 'Weekend']

const main = async (): Promise<string> => {
  // get user country selection
  const userCountry = await getUserCountrySelection()

  const holidays = await getCountryHolidays(userCountry.countryCode)

  console.log(holidays)

  // // reset the data directory
  // if (fs.existsSync(DATA_DIR))
  //   try {
  //     fs.rmSync(DATA_DIR, { recursive: true })
  //   } catch (err) {
  //     console.error('Error deleting folder:', String(err))
  //   }
  // fs.mkdirSync(DATA_DIR)

  // // write the data file to the data directory
  const filePath = `${DATA_DIR}/${userCountry.name}_holidays_2023.csv`
  // fs.writeFileSync(DATA_FILE_PATH, csvData, 'utf-8')

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
