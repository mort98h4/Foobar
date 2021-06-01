import Payment from "payment";

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCVC(value = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 3;

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);
  const number2 = clearValue.includes(2);
  const number3 = clearValue.includes(3);
  const number4 = clearValue.includes(4);
  const number5 = clearValue.includes(5);
  const number6 = clearValue.includes(6);
  const number7 = clearValue.includes(7);
  const number8 = clearValue.includes(8);
  const number9 = clearValue.includes(9);

  if (clearValue.length === 1) {
    if (
      number2 ||
      number3 ||
      number4 ||
      number5 ||
      number6 ||
      number7 ||
      number8 ||
      number9
    ) {
      return `0${clearValue}`;
    }
  } else if (clearValue.length === 2) {
    const secondNumber = clearValue.slice(1, 2);
    const secondNumber3 = secondNumber.includes(3);
    const secondNumber4 = secondNumber.includes(4);
    const secondNumber5 = secondNumber.includes(5);
    const secondNumber6 = secondNumber.includes(6);
    const secondNumber7 = secondNumber.includes(7);
    const secondNumber8 = secondNumber.includes(8);
    const secondNumber9 = secondNumber.includes(9);

    if (
      secondNumber3 ||
      secondNumber4 ||
      secondNumber5 ||
      secondNumber6 ||
      secondNumber7 ||
      secondNumber8 ||
      secondNumber9
    ) {
      return clearValue.slice(0, 1);
    }
  }

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}
