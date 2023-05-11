import * as readline from 'readline'
import { getAllCountries } from './api'

export const getUserCountrySelection = async (): Promise<CountryData> => {
  const countries = await getAllCountries()

  // list available options to user
  console.log(countries.map((e) => e.name).join('\n'), '\n')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
  })

  // recursive helper function to ensure valid input for questions
  const askQuestion = async () => 
    await new Promise<CountryData>((resolve) => {
    rl.question('Select a country from the options above: ', (input) => {
      try {
        input = input.trim()
        const country = countries.find(
          (e) => e.name.toLowerCase() === input.toLowerCase()
        )
  
        if(!country)
          throw `'${input}' is not a valid option. Please try again.`
       
        resolve(country)
        rl.close()
        console.log()
      } catch (err) {
        console.log(String(err), '\n')
        askQuestion().then(resolve)
      }
    })
  })

  return await askQuestion()
}
