import { calcTip, mulArr, temperatures, arrtask } from './common.js';

let tips = [125, 555, 44];
// const test = calcTip(100);
// console.log('Test : ', test)

// const dataget = tips.map((data) => {
//   const tipsAmt = calcTip(data);
//   const newval = `Your Food Amount is ${data} and Tips is ${tipsAmt}`;

//   return newval;
// });

// console.log('dataget : ', dataget);
// dataget.forEach((dataGet) => {
//   const creatEle = document.createElement('p');
//   creatEle.style.color = 'red';
//   creatEle.textContent = dataGet;
//   document.getElementById('text').appendChild(creatEle);
// });

// # revers Array print
// const revArrprint = (mulArr) => {
//   for (let index = mulArr.length - 1; index >= 0; index--) {
//     console.log(mulArr[index]);
//   }
// };
// revArrprint(mulArr);

// # dice roll out
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log('dice : ', dice);

// while (dice != 6) {

//   console.log(`DiseVal is ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Hey your Value is ${dice} game over...`);

// }
// # challage

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tipss = [];
// let totals = [];

// for (let index = 0; index < bills.length; index++) {
//   const tipsVal = calcTip(bills[index]);
//   const ActualBills = bills[index];

//   const TotalValue = ActualBills + tipsVal;
//   tipss.push(tipsVal);
//   totals.push(TotalValue);
// }
// console.log('Tips : ', tipss);
// console.log('totals : ', totals);

// const temperatures = [15, 22, 19, 30, 25, 18, 'error', 10, 28, 26, 20];
//  console.log('maxVal : ', maxVal)
//  console.log('minVal : ', minVal)
// for (let i = 0; i < temperatures.length; i++) {
//   const maxVal = Math.max(...temperatures);
//   const minVal = Math.min(...temperatures);

//   const AmplitudeVal = maxVal - minVal;

//   console.log('AmplitudeVal : ', AmplitudeVal);
// }

// let max = temperatures[0];
// let min = temperatures[0];
// // console.log(max, min)

// const ampliTude = (temperatures) => {
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] != 'number') continue;
//     console.log('hello');
//     if (temperatures[i] > max) max = temperatures[i];
//     if (temperatures[i] < min) min = temperatures[i];
//   }
//   return max - min;
// };

// const atualVal = ampliTude(temperatures);
// console.log('atualVal : ', atualVal);

// # calvin Cal

// const clvinCalculater =  () => {
//   const kalDetails = {
//     type : 'temp',
//     unit : 'celcious',
//     value :  Number(prompt('Degree celcious : '))
//   }
//   const kalvinVal =  kalDetails.value + 273;
//   console.log('kalvinVal : ', kalvinVal)
// }

// clvinCalculater()

// #chalage
const printForcast = (arrtask) => {
  const values = arrtask
    .map((data, index) => `${data}c in a ${index + 1}`);
  return `...${values}...`;
};
// printForcast(arrtask);
const tesrr = printForcast(arrtask);
console.log('tesrr : ', tesrr);

const secondSol =  (arrtask) => {
  let str =  '';
  for(let i = 0 ; i < arrtask.length; i++){
    str = str + `...${arrtask[i]}c in a ${i + 1}days`;
  }
  console.log('str : ', str)
}
secondSol(arrtask)