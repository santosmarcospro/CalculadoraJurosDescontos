let title = `Calculadora de Juros e Descontos`;
let value = parseFloat(prompt(`${title}\n\nInforme o valor: `));
let percentage = parseFloat(prompt(`${title}\n\nInforme a por porcentagem: `));

let percentageValue = value * (percentage / 100);

let discount = value - percentageValue;
let interest = value + percentageValue;

alert(
  `${title}\n\nValor: ${value.toFixed(2)}\nPorcentagem: ${percentage.toFixed(
    2
  )}\nValor da Porcentagem: ${percentageValue.toFixed(
    2
  )}\nDesconto: ${discount.toFixed(2)}\nJuros: ${interest.toFixed(2)}`
);
