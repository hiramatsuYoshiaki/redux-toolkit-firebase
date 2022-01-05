import { format} from 'date-fns'
export const formatdate = (dateTime,edit) => {
    const jsTimestamp = dateTime.toDate()
    const fromtDateTime = format(jsTimestamp, edit)
    // const fromtDateTime = format(jsTimestamp, 'yyyy年MM月dd日 HH:mm')
    return  fromtDateTime
}