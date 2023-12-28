let run = true,
  title = `Calculadora de Juros e Descontos`,
  value,
  percentage;

do {
  do {
    value = parseFloat(prompt(`${title}\n\nInforme o valor: `));
  } while (isNaN(value) || value < 0);
  do {
    percentage = parseFloat(prompt(`${title}\n\nInforme a por porcentagem: `));
  } while (isNaN(percentage) || percentage < 0);

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
  run = confirm(`${title}\n\nDeseja realizar outro cálculo?`);
} while (run);
