export const calAge = (Year) => {
  return 2037 - Year;
};
export const calcAverage = (score1, score2, score3) => {
  const Avg = score1 + score2 + score3 / 3;
  return Avg;
};

export const calcTip = (bill) => {
  // console.log(bill);
  return bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
};

export const mulArr = [
  'Hello',
  'cello',
  'Gap',
  2023 - 1995,
  ['home', 'sick', 'mad'],
  true,
];
export const temperatures = [
  3,
  -2,
  -6,
  -1,
  'error',
  10,
  13,
  17,
  15,
  14,
  9,
  28,
  26,
  20,
];

export const arrtask = [17, 21, 23];

export const randomNumber = () => {
  const getValRandom = Math.trunc(Math.random() * 20) + 1;

  return getValRandom;
};

export const belowTwenty = [
  'Zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

export const lossFn = (message, score, guess, msggShow) => {
  message.textContent = msggShow;
  score.textContent = 0;
  guess.value = null;
};

export const genratNumberBelowSix = () => {
  const genratNumber = Math.trunc(Math.random() * 6) + 1;
  return genratNumber
};
