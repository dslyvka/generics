const printLength = <T extends { length: number }>(arr: T): void => {
  console.log(arr.length);
};

interface ILength {
  length: number;
}

const printLength2 = <T extends ILength>(arr: T): void => {
  console.log(arr.length);
};

printLength([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printLength2("Super tring");
// printLength2(5); => Error

// const addFullName = <T extends { firstName: string; lastName: string }>(
//   person: T
// ): T & { fullName: string } => ({
//   ...person,
//   fullName: `${person.firstName} ${person.lastName}`,
// });

interface IAddFullName {
  firstName: string;
  lastName: string;
}


const addFullName = <T extends IAddFullName>(person: T) => ({
  ...person,
  fullName: `${person.firstName} ${person.lastName}`,
});

// : T & { fullName: string } => Тип, который возвращает функция


console.log(
  addFullName({
    firstName: "John",
    lastName: "Smith",
  })
);
console.log(
  addFullName({
    firstName: "Danyil",
    lastName: "Slyvka",
    age: 20,
  })
);
export {};
