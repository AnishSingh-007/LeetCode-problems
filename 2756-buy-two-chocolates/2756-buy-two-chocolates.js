/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    if (prices.length < 2) {
        return money; // If there are less than 2 prices, we cannot buy two chocolates.
    }

    // Initialize the two smallest prices
    let min1 = Infinity, min2 = Infinity;

    // Find the two smallest prices
    for (let price of prices) {
        if (price < min1) {
            min2 = min1;
            min1 = price;
        } else if (price < min2) {
            min2 = price;
        }
    }

    // Calculate the total cost of the two cheapest chocolates
    const totalCost = min1 + min2;

    // If the total cost is greater than the money we have, return the original amount of money
    if (totalCost > money) {
        return money;
    }

    // Otherwise, return the remaining money after buying the chocolates
    return money - totalCost;
};
