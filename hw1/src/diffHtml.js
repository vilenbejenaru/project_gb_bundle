import { DateTime } from "./luxon.js"; // 1

export const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years + ', '  :  ''}
        ${diff.months ? 'Месяцев: ' + diff.months + ', '  : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
` ;


