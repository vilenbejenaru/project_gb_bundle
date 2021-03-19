import { DateTime } from "./luxon.js"; // 1

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        [secondDate, firstDate] = [firstDate,  secondDate];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

