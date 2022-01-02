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
