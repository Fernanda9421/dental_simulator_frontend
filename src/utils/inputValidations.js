const ZERO = 0;
const TEN = 10;

export const isValidName = (name) => name.length > TEN;
export const isValidTreatment = (treatment) => treatment.length !== ZERO;
