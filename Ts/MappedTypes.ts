//mapped types は汎用的で分別するのが難しい
//ただ大きく分けて二つある

import { isParameterPropertyDeclaration } from "typescript";

//1.オブジェクトのプロパティ名を限定するときに使う
//2.Genericsと組み合わせて便利な型を作り出すときに使える

//構文
type foo = {
    [K in "height" | "weight"]: number;
};

const foo: foo = {
    height: 123,
    weight: 333,
};
//?と-?でオプショナルか否かを設定することができる

type poo = {
    [K in keyof typeof foo]: string;
};

type Uoo = "name" | "id";

type Yoo = {
    [I in Uoo]: number;
};

type Loo = {
    name: string;
    id: number;
};
type Goo = {
    country: "US";
} & Loo;

type Poo = {
    country: "JA";
} & Loo;
type Hoo = {
    country: "FR";
} & Loo;

const men = (value: Goo | Poo | Hoo) => {
    if (value.country === "FR") {
        value;
    }
    if (value.country === "JA") {
        value;
    }
};
