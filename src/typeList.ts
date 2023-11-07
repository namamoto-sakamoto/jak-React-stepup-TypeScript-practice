/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列[]（記述方法が2パターンある）
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [3, 4, 5];

// tuple 1つ目がnumberで２つ目がstring
//というような指定ができるが、使い道は不明
let tuple: [number, string] = [0, "A"];

// any なんでも。基本的に使用しない
let any: any = false;

// void 何も返却値がないという型
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object オブジェクト{}
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAAA" };
