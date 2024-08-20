const a:any = 100;
console.log(a * 3);

const x: unknown = 100;
// console.log(x * 3); // Error: Object is of type 'unknown'

// 戻り値のない関数
function sayHello(): void {
    console.log('Hello!');
}

// 型エイリアス
type StringOrNumber = string | number;
let value: StringOrNumber;
value = 100;
value = "neko";
console.log(value); // 下の方が優先される　理由：型エイリアスは型の別名を定義するためあとから追加した方が優先される

// 構造的部分型
type Summary = {name: string};
type Detail = {name: string, age: number};
const aobaDetail: Detail = {name: 'aoba', age: 25};
console.log(aobaDetail);

// let numbers: number[];
let strings: Array<bigint>;

const numbers = [0, 1, 2];
console.log(numbers[1]);


// 読み取り専用配列
const numbers2: readonly number[] = [0, 1, 2];
const strings2: ReadonlyArray<string> = ['a', 'b', 'c'];
//numbers2[1] = 10; // Error: Index signature in type 'readonly number[]' only permits reading


// 配列のループ (for...of構文)
const numbers3 = [0, 1, 2];
for (const num of numbers3) {
    console.log(num);
}


// オブジェクト (ドットを使ったアクセス)
const hacchi = {
    name: "hacchi",
    age: 16
};
console.log(hacchi.name);
console.log(hacchi.age);


//　オプションプロパティ
let obj: {name: string, age?: number};
obj = {name: 'hacchi'}; // ageプロパティがなくてもエラーにならない
console.log(obj.name);
console.log(obj.age);
