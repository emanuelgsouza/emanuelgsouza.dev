import { format } from 'date-fns'

export const humanDateFormat = date => format(date, 'PP')

export const humanDateFormatFull = date => format(date, 'PPpp')
