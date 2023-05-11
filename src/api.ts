const getApiUrl = (endpoint: string) => 
  `https://date.nager.at/api/v3/${endpoint}`

export const getAllCountries = async () => {
  const res = await fetch(getApiUrl('AvailableCountries'))
  return res.json()
}


