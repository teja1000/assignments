/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  function findCategory(arr, cat) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) {
        return arr[i];
      }
    }
    return null;
  }

  let a = [];
  for (let i = 0; i < transactions.length; i++) {
    let x = transactions[i];
    let y = findCategory(a, x.category);

    if (y) {
      y.totalSpent += x.price;
    } else {
      a.push({ category: x.category, totalSpent: x.price });
    }
  }

  return a;
}

module.exports = calculateTotalSpentByCategory;
