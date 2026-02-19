// 1
const tovar = [
  { id: 1, name: 'Mango', cost: 310, nayavnist: true, sale: true },
  { id: 2, name: 'Poly', cost: 47090, nayavnist: false, sale: false },
  { id: 3, name: 'Kiwi', cost: 230, nayavnist: true, sale: false },
  { id: 4, name: 'Ajax', cost: 1500, nayavnist: false, sale: false },
  { id: 5, name: 'Chelsy', cost: 800, nayavnist: true, sale: false },
];

const a = tovar.map(x => x.name);
console.log(a);

// 2
const b = tovar.map(x => x.cost * 1.15);
console.log(b);
// 3
const c = tovar.filter(x => x.cost >= 1000);
console.log(c);
// 4
const d = tovar.find(x => x.id === 5);
console.log(d);
// 5
const e = tovar.every(x => x.nayavnist);
console.log(e);
// 6
const f = tovar.some(x => x.sale);
console.log(f);
// 7
const g = tovar.map(x => x.cost);
console.log(g);
// 8
let h = tovar[0];

for (let i = 1; i < tovar.length; i++) {
  if (tovar[i].cost > h.cost) {
    h = tovar[i];
  }
}

console.log(h);
