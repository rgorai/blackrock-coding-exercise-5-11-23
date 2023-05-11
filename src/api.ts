
const getApiUrl = (endpoint: string) =>
  `https://date.nager.at/api/v3/${endpoint}`

export const getAllCountries = async (): Promise<CountryData[]> => {
  const res = await fetch(getApiUrl('AvailableCountries'))
  return res.json()
}

export const getCountryHolidays = async (countryCode: string): Promise<HolidayData[]> => {
  const res = await fetch(getApiUrl(`PublicHolidays/2023/${countryCode}`))

  if (!res.ok)
    throw `API Error: ${await res.text()}`

  return res.json()
}
