// 1 завдання
let a = "Привіт, як справи?";
let b = 0;
for (let c of a) {
  if (c === ' ') {
    b = b + 1;
  }
}
console.log("Кількість пробілів:", b);

// 2 завдання
let d = [4, 7, 1, 8, 5];
let e = 0;
for (let f of d) {
  e = e + f;
}
let g = e / d.length;
console.log("Середнє арифметичне:", g);

// 3 завдання
let h = [4, 7, 1, 8, 5];
let i = h[0];
let j = h[0];
for (let k of h) {
  if (k > i) {
    j = i;
    i = k;
  } else if (k > j && k < i) {
    j = k;
  }
}
console.log("Друге найбільше число:", j);

// 4 завдання
let l = new Array(15);
for (let m = 0; m < 15; m = m + 1) {
  l[m] = Math.floor(Math.random() * 20) + 1;
}
let n = new Array(15);
let o = 0;
for (let p of l) {
  if (p % 2 === 0) {
    n[o] = p;
    o = o + 1;
  }
}
let q = "";
for (let r = 0; r < o; r = r + 1) {
  q = q + n[r] + " ";
}
console.log("Випадковий масив:", l);
console.log("Парні числа:", q);

// 5 завдання
let s = "Привіт";
let t = "";
for (let u of s) {
  t = u + t;
}
console.log("Перевернутий рядок:", t);

// 6 завдання
let v = [1, 3, 5, 7, 8];
let w = true;
let x = v[0];
for (let y of v) {
  if (y < x) {
    w = false;
  }
  x = y;
}
console.log("Масив відсортований?", w);

// 7 завдання
let z = "Це простий приклад для JavaScript";
let aa = new Array(100);
let bb = new Array(100);
let cc = 0;
let dd = 0;

for (let ee of (z + " ")) {
  if (ee !== ' ') {
    aa[cc] = ee;
    cc = cc + 1;
  } else {
    if (cc > dd) {
      for (let ff = 0; ff < cc; ff = ff + 1) {
        bb[ff] = aa[ff];
      }
      dd = cc;
    }
    cc = 0;
  }
}

let gg = "";
for (let hh = 0; hh < dd; hh = hh + 1) {
  gg = gg + bb[hh];
}
console.log("Найдовше слово:", gg);

// 8 завдання
let ii = [1, 2, 2, 3, 4, 1, 2, 3, 4, 5];
let jj = new Array(ii.length);
let kk = new Array(ii.length);
let ll = 0;
let mm = 0;
let nn = ii[0];

for (let oo of ii) {
  if (oo > nn) {
    kk[ll] = oo;
    ll = ll + 1;
  } else {
    if (ll > mm) {
      for (let pp = 0; pp < ll; pp = pp + 1) {
        jj[pp] = kk[pp];
      }
      mm = ll;
    }
    kk[0] = oo;
    ll = 1;
  }
  nn = oo;
}
if (ll > mm) {
  for (let pp = 0; pp < ll; pp = pp + 1) {
    jj[pp] = kk[pp];
  }
  mm = ll;
}

let qq = "";
for (let pp = 0; pp < mm; pp = pp + 1) {
  qq = qq + jj[pp] + " ";
}
console.log("Найдовша зростаюча послідовність:", qq);
