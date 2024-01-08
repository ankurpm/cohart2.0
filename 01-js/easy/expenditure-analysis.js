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
  let tempMap = new Map()
    transactions.forEach(element => {
        category = element.category
        price = element.price
        if(tempMap.has(category)){
        tempMap.set(category, tempMap.get(category)+price)
        }else{
            tempMap.set(category, price)
        }
    });

    let result = [];
    
    tempMap.forEach( (v,k) =>{
        result.push({
            category: k,
            totalSpent: v
            
    })});

    return result;
}

module.exports = calculateTotalSpentByCategory;
