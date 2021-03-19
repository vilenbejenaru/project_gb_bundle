import {formatError} from './utils.js';
import {diffDates} from './diffDates.js '; 
import {diffToHtml} from './diffHtml.js '; 

const dateCalcForm = document.querySelector('.datecalc');
const dateCalcResult = document.querySelector('.datecalc__result');

dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates (event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();
    
    let {firstDate, secondDate} = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const result = diffDates(firstDate, secondDate)
        dateCalcResult.innerHTML = diffToHtml(result);
    }else dateCalcResult.innerHTML = formatError ('Для расчета выберите две даты')
     
}

