export const convertDate = (date) => (
  date.split('-').reverse().join('/')
);

export const numberOfResults = (results) => (
  results.length
);

export const totalValue = (results) => {
  const values = results.map((result) => Number(result.installmentValue));
  return values.reduce((acc, crr) => acc + crr, 0).toFixed(2);
};

export const numberOfInstallments = (installments) => {
  const installmentsArray = [];

  for (let index = 1; index <= installments; index += 1) {
    installmentsArray.push(index);
  }

  return installmentsArray;
};
