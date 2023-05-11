import axios, {AxiosProxyConfig} from 'axios'

const proxy: AxiosProxyConfig = {
  protocol: 'http',
  host: 'localhost',
  port: 3000,
  // Add any additional proxy configuration if needed, like auth info
}

const axiosInstance = axios.create({ proxy })

const callApi = async (endpoint: string) => {
  try {
    const { data } = await axiosInstance.get(`https://date.nager.at/api/v3/${endpoint}`)
    return data
  } catch (err: any) {
    if (err.code === 'ECONNREFUSED') 
      throw 'Proxy server has not been started.'
    throw String(err)
  }
}

export const getAllCountries = async (): Promise<CountryData[]> =>
  await callApi('AvailableCountries')

export const getCountryHolidays = async (countryCode: string): Promise<HolidayData[]> => 
  await callApi(`PublicHolidays/2023/${countryCode}`)
