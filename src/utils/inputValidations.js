export const isValidName = (name, min) => (
  name.length >= min && typeof name === 'string'
);

export const isValidTotalPrice = (totalPrice, min) => (
  totalPrice > min
);
