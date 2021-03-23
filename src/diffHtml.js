import  DateTime from 'luxon/datetime'; // 1
const diffToHtml = (diff) => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years + ', ' : ''}
        ${diff.months ? 'Месяцев: ' + diff.months + ', ' : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;
export default diffToHtml;
