// PBT 07 - A1/A2/A3/A4/A5 demo

console.log("=== A1: var / let / const ===");

// Đoạn 1
try {
  console.log(x);
} catch (error) {
  console.log(error.message);
}
var x = 5;
console.log(x);

// Đoạn 2
try {
  console.log(y);
} catch (error) {
  console.log(error.message);
}
let y = 10;
console.log(y);

// Đoạn 3
const z = 15;
try {
  z = 20;
} catch (error) {
  console.log(error.message);
}
console.log(z);

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Đoạn 5
let a = 1;
{
  let a = 2;
  console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

console.log("\n=== A2: Data Types & Coercion ===");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");
console.log(true + true);
console.log([] + []);
console.log([] + {});
console.log({} + []);

console.log("\n=== A3: == vs === ===");
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(0 == false);
console.log(0 === false);

console.log("\n=== A4: Truthy & Falsy ===");
if ("0") console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if ({}) console.log("D");
if (null) console.log("E");
if (0) console.log("F");
if (-1) console.log("G");
if (" ") console.log("H");

console.log("\n=== A5: Template Literals ===");
const name = "An";
const age = 20;
const userId = 12;
const page = 2;
const title = "Tiêu đề";
const description = "Mô tả";
const price = 150000;

const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
const html = `<div class="card">
  <h2>${title}</h2>
  <p>${description}</p>
  <span>Giá: ${price}đ</span>
</div>`;

console.log(greeting);
console.log(url);
console.log(html);
