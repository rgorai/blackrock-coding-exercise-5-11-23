import * as fs from 'fs'
import * as readline from 'readline'
import { getAllCountries } from './api';

const DATA_DIR = 'data'
const DATA_FILE_PATH = `${DATA_DIR}/austria_holidays_2023.csv`

const csvData = "Name,Email\nJohnakfoijsdiofjsdiojfoisjdfiosdf Doe,johndoe@example.com\nJane Smith,janesmith@example.com";

const main = async () => {
  // get all countries for user input
  const countries = await getAllCountries()

  console.log(countries)

  // // reset the data directory
  // if (fs.existsSync(DATA_DIR))
  //   try {
  //     fs.rmSync(DATA_DIR, { recursive: true })
  //   } catch (err) {
  //     console.error('Error deleting folder:', String(err))
  //   }
  // fs.mkdirSync(DATA_DIR)

  // // write the data file to the data directory
  // fs.writeFileSync(DATA_FILE_PATH, csvData, 'utf-8')
}

// execute the operation
main()
  .then(() => {
    console.log(`Operation complete! File can be found at ./${DATA_FILE_PATH}`)
  })
  .catch((err) => {
    console.error('Something went wrong!', err)
  })
