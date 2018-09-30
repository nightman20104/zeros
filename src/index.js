module.exports = function getZerosCount(number) {
  let five = 5;
  let zerosCount = 0;
  while (number>five) {
    zerosCount = zerosCount + Math.floor(number/five);
    five = five*5;
  }
  return zerosCount;
}
