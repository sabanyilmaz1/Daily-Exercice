/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // on met à jour le prix minimum si on trouve un prix plus bas que le prix minimum actuel (minPrice)
    console.log(
      `minPrice : ${minPrice} priceI:${prices[i]} maxProfit : ${maxProfit}`
    );
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      // on met à jour le profit maximum si on trouve un profit plus grand que le profit maximum actuel (maxProfit)
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 2, 5, 1, 6, 4]));
