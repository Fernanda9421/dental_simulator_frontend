export const convertDueDate = (date) => (
  date.split('-').reverse().join('/')
);