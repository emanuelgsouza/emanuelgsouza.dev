import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')
dayjs.extend(utc)

export const readableDate = (dateObj) => {
  return dayjs(dateObj || undefined)
    .utc()
    .format('MMM, DD YYYY')
}

export const getReadableMinutes = (minutes = 0) => {
  if (minutes > 1) {
    return `${minutes} minutos de leitura`
  }

  return '1 minuto para leitura'
}

export const timeToRead = (content = '') => {
  const WORDS_PER_MINUTE = 200
  const words = content.split(' ')
  const minutes = parseInt(words.length / WORDS_PER_MINUTE, 10)

  return getReadableMinutes(minutes)
}
