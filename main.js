// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a
const tvToSell = inventory.map ((tvToBeSold) => {
  const tvStock = tvToBeSold.originalStock;
  const tvSold = tvToBeSold.sold;
  return tvStock - tvSold;
})
let total = 0
tvToSell.map(function(currentValue) {
  total += currentValue
})
console.log('map: ' + total);

// Opdracht 1b
let header1 = document.getElementById("toBeSold")
header1.innerText = total;

// Opdracht 2a
const tvTypes = inventory.map((tvtype) => {
  return tvtype.type
})
console.log(tvTypes)

// Opdracht 2b
const tvSoldOut = inventory.filter((outOfStock) => {
  return outOfStock.originalStock === outOfStock.sold;
})
console.log(tvSoldOut)

// Opdracht 2c
const ambilight = inventory.find((isItAmbilight) => {
  return isItAmbilight.options.ambiLight === true;

})
console.log(ambilight)

// Opdracht 2d
const price = inventory.sort ((a, b) => {
  if (a.price > b.price) {
    return 1
  }
  if (a.price < b.price) {
    return -1
  }
})
console.log(price)

// Opdracht 3a
const totalAmountOfRevenue = inventory.map((totalRevenue) => {
  const originalStock = totalRevenue.originalStock;
  const sold = totalRevenue.sold;
  const price = totalRevenue.price;
  return (originalStock + sold) * price
})
let totalRevenue = 0
totalAmountOfRevenue.map((currentValue) => {
  totalRevenue += currentValue
})
let header2 = document.getElementById("revenue")
header2.innerText = totalRevenue
console.log('map: ' + totalRevenue)

// Opdracht 3b
const totalEarned = inventory.map((totalEarnings) => {
  const sold = totalEarnings.sold;
  const price = totalEarnings.price;
  return sold * price;
})
let totalEarnedSold = 0;
totalEarned.map((currentValue) => {
  totalEarnedSold += currentValue
})
let header3 = document.getElementById("earned")
header3.innerText = totalEarnedSold;
console.log(totalEarnedSold)

// Opdracht 4
let philipsType = "";

for (let i=0; i < inventory.length; i++){
  if (inventory[i].type === "43PUS6504/12") {
    philipsType = inventory[i].type;
  }
}
console.log(philipsType)
 let div1 = document.getElementById("type1");
div1.innerText = philipsType

let Nikkei = "";

for (let i=0; i < inventory.length; i++){
  if (inventory[i].type === "NH3216SMART") {
    Nikkei = inventory[i].type;
  }
}
console.log(Nikkei)
let div2 = document.getElementById("type2");
div2.innerText= Nikkei

// Helaas kom ik maar niet door opdracht 5 heen....