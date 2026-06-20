// find the total money Toros spends to buy exactly K items from a store.📋 The RulesThe store has N total items.
// Every item has a different price.Toros wants the cheapest items to save money.He fears the 2 cheapest items are broken.
// Toros skips those 2 cheapest items completely.He buys the next K cheapest items left.
// 🔍 Walking Through the Example
// Let's look at the numbers you provided: 5 2 and 4 1 2 3 5.
// Total items (N): 5
// Items to buy (K): 2
// Store prices: 4, 1, 2, 3, 5
// Step 1: Sort the prices from cheapest to most expensive1, 2, 3, 4, 5
// Step 2: Toss out the 2 cheapest itemsRemove 1 and 2.Remaining items: 3, 4, 5
// Step 3: Pick the K (2) cheapest items leftThe two cheapest remaining are 3 and 4.
// Step 4: Add them up3 + 4 = 7

function supermarket(prices, n, k) {
  let sorted = prices.sort((a,b)=>a -b);
  sorted.shift();
  sorted.shift();
  let totalcost = 0
  for(let i=0; i<k; i++){
    totalcost +=sorted[i];
  }

  return(totalcost)
}

let product_price = [4,7,9,3,1,8,11,30,2];
let total_item = product_price.length;
let items_to_buy = 4;

let total_price_of_buying_products = supermarket(product_price , total_item , items_to_buy);
console.log(total_price_of_buying_products);
