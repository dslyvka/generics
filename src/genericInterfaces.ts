// interface IUser {
//   id: number | string;
// }

interface IUser<T> {
  id: T;
}

const mango: IUser<number> = {
  id: 37,
};

const poly: IUser<string> = {
  id: "42",
};

console.log(mango, poly);

interface ITab<T> {
  id: string;
  position: number;
  active: boolean;
  content: T;
}

const tab1: ITab<string> = {
  id: "id-1",
  position: 1,
  active: true,
  content: "Tab data",
};

const tab2: ITab<string[]> = {
  id: "id-2",
  position: 2,
  active: false,
  content: ["content-1", "content-2", "content-3", "content-4"],
};

console.log(tab1, tab2);

export {};
