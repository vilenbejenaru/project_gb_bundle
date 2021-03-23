import DateTime from 'luxon/datetime'; // 1

function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        [secondDate, firstDate] = [firstDate, secondDate];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}
export default diffDates;
