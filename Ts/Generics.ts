//generics は外部のパッケージのものに型をつける
//型の決定を遅延することができる
type Foo<T extends string | number = string> = {
    [key: string]: T;
};

const foo1: Foo<number> = {
    //型定義したのちに引数的な感じで型を渡すことによって型の定義ができる
    hello: 111,
};

const foo2: Foo = {
    //初期値がstringに決まっているからエラーが出ない
    whats: "hello",
};

function bar<T>(arg: T) {
    return { value: arg };
}

bar<[{ [key: string]: number }, { [key: string]: number }]>([
    { aaa: 123, bbb: 456 },
    { uuu: 111, ttt: 888 },
]); //ここって引数に複数の型を許容するのってどうするのがいい

const iwt = <T extends string | string[]>(arg: T) => {
    return { value: arg };
};
iwt(["", ""]);
//ユーザー定義のtype guard generics使ってみる

type UserA = { name: string; address: "広島" | "岡山" | "山口" };
type UserB = { name: string; address: "東京" | "千葉" | "埼玉" };

const isUserA = (user: UserA | UserB): user is UserA => {
    return user.address === "広島";
};

const isUserB = (user: UserA | UserB): user is UserB => {
    return user.address === "千葉";
};

type Obj = {
    a: string;
    300: boolean;
};

const obj = {
    a: 1,
    b: "hello",
    c: true,
};

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
};

const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
    obj[key] = value;
};

const hoge = getProperty(obj, "c");

setProperty(obj, "b", "Hello");
setProperty(obj, "c", false);
