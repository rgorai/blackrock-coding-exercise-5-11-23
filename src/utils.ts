export const getDaysUntil = (dateStr: string): string | null => {
  const differenceDays = Math.ceil(
    (new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )
  return differenceDays > 0 ? String(differenceDays) : ''
}

export const isWeekend = (dateStr: string): boolean => {
  const dayOfWeek = new Date(dateStr).getUTCDay()
  return dayOfWeek === 0 || dayOfWeek === 6
}
