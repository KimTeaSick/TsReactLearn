const a: number = 5;

const b: string = "string";

function c(a: number, b: number): number {
  return a + b;
}
const d: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
const e: symbol = Symbol.for("abc");

const arr: Array<number> = [];

const tuple: [number, number, string] = [1, 2, "3"];

const truee: true = true;
