"use strict";
const foo1 = {
    //型定義したのちに引数的な感じで型を渡すことによって型の定義ができる
    hello: 111,
};
const foo2 = {
    //初期値がstringに決まっているからエラーが出ない
    whats: "hello",
};
function bar(arg) {
    return { value: arg };
}
bar([
    { aaa: 123, bbb: 456 },
    { uuu: 111, ttt: 888 },
]); //ここって引数に複数の型を許容するのってどうするのがいい
const iwt = (arg) => {
    return { value: arg };
};
iwt(["", ""]);
const isUserA = (user) => {
    return user.address === "広島";
};
const isUserB = (user) => {
    return user.address === "千葉";
};
const obj = {
    a: 1,
    b: "hello",
    c: true,
};
const getProperty = (obj, key) => {
    return obj[key];
};
const setProperty = (obj, key, value) => {
    obj[key] = value;
};
const hoge = getProperty(obj, "c");
setProperty(obj, "b", "Hello");
setProperty(obj, "c", false);
