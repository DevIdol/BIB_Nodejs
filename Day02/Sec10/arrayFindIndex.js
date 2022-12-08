const items = [
  { name: "Book", price: 400 },
  { name: "Pen", price: 200 },
  { name: "Ruller", price: 300 },
];

const lowPriceIndex = items.findIndex((index) => index.price < 300);

console.log(lowPriceIndex);
