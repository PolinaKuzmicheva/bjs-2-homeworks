'use strict';

function solveEquation(a, b, c) {
  let d = Math.pow(b,2) -4 * a * c;
  let arr = [];
  let x1, x2;


  if (d < 0) {
    arr = [];

  } else if (d === 0){
    x1 = -b / (2 * a);
    arr.push(+x1);

  } else {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(+x1);
    arr.push(+x2);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  };
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  };
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  };

  let S = amount - contribution;
  let term = new Date();
  let P = (percent / 12) / 100;
	let n =  ((date.getFullYear() - term.getFullYear()) * 12) + (date.getMonth() - term.getMonth());

  // Платеж = S * (P + (P / (((1 + P)^n) - 1))), 
  // где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
  
  let monthlyPayment = S * (P + P / (((1 + P) ** n) - 1));

  let totalAmount = Number((monthlyPayment * n).toFixed(2));

  return totalAmount;
}
