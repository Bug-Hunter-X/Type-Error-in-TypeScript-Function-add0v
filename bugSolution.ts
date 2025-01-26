function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return 0; // Or handle the error appropriately
  }
}

let result = addSafe("hello", "world"); // No error, returns 0
let result2 = addSafe(10, 20); // returns 30