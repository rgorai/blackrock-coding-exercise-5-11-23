type CountryData = {
  name: string
  countryCode: string
}

type HolidayTypes =
  | 'Public'
  | 'Bank'
  | 'School'
  | 'Authorities'
  | 'Optional'
  | 'Observance'

type HolidayData = {
  date: string
  localName: string | null
  name: string | null
  countryCode: string | null
  fixed: boolean
  global: boolean
  counties: string[] | null
  launchYear: number | null
  types: HolidayTypes[] | null
}
