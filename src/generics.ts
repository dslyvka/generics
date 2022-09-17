const reverse = <T>(arr: T[]): T[] => {
  const newArr = [...arr].reverse();
  return newArr;
};

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([" Mango ", " Poly ", " Ajax ", " Kiwi "]));
console.log(reverse([{ a: 1 }, { b: 2 }, { c: 3 }]));

const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual(3, "3"));

const makeArray = <T, Y>(a: T, b: Y) => {
  return [a, b];
};

console.log(makeArray(2, " 3 "));
console.log(makeArray<boolean, number>(true, 5));

export {};
