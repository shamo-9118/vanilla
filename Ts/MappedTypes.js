"use strict";
//mapped types は汎用的で分別するのが難しい
//ただ大きく分けて二つある
Object.defineProperty(exports, "__esModule", { value: true });
const foo = {
    height: 123,
    weight: 333,
};
const men = (value) => {
    if (value.country === "FR") {
        value;
    }
    if (value.country === "JA") {
        value;
    }
};
