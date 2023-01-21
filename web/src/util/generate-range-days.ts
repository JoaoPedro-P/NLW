import dayjs from "dayjs"


export function GenerateRangeDays (){
    const firstDayYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = firstDayYear
    
    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }
    return (
        dates
    )
}