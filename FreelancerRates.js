const HOURLY_RATE = 8;
function dayRate(day) {
  return day * HOURLY_RATE;
}
function daysInBudget(amount, day) {
  let hours = dayRate(day);
  return Math.floor(amount / hours);
}
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {}

console.log(dayRate(89));
console.log(daysInBudget(20000, 89));
