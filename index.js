"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userData = {
    name: "marumoto",
    height: 162,
};
const foo = (value) => {
    if (!value) {
        console.log("null");
        return;
    }
    console.log("true");
    return;
};
foo("true");
const isUserA = (user) => {
    return user.lang === "ja";
};
const isUserB = (user) => {
    return user.lang === "en";
};
const Users = (users) => {
    if (isUserA(users)) {
        console.log(users);
        return;
    }
    if (isUserB(users)) {
        console.log(users);
        return;
    }
};
const fonn = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("");
    const json = yield res.json();
    if (isUserA(json)) {
        return json;
    }
    if (isUserB(json)) {
        return json;
    }
});
const persons = [
    { name: "田中", lang: "ja" },
    { name: "中田", lang: "ja" },
    { name: "mark", lang: "en" },
];
const japanese = persons.filter((person) => person.lang === "ja");
const english = persons.filter(isUserB);
console.log(japanese);
console.log(english);
