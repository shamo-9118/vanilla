import { getConstantValue } from "typescript";

type User = {
    name: "marumoto";
} & OptionalPersonalData;

type PersonalData = {
    height: 162;
    weight: 72;
};

type OptionalPersonalData = {
    [K in keyof PersonalData]?: PersonalData[K];
};

const userData: User = {
    name: "marumoto",
    height: 162,
};

const foo = (value: string | null) => {
    if (!value) {
        console.log("null");
        return;
    }
    console.log("true");
    return;
};
foo("true");

//ユーザー定義のType Guard
//しようする値の方がわからない時に使うことがある

type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
    return user.lang === "ja";
};
const isUserB = (user: UserA | UserB): user is UserB => {
    return user.lang === "en";
};

const Users = (users: any) => {
    if (isUserA(users)) {
        return;
    }
    if (isUserB(users)) {
        return;
    }
};

const fonn = async () => {
    const res = await fetch("");
    const json = await res.json();
    if (isUserA(json)) {
        return json;
    }
    if (isUserB(json)) {
        return json;
    }
};

const persons: (UserA | UserB)[] = [
    { name: "田中", lang: "ja" },
    { name: "中田", lang: "ja" },
    { name: "mark", lang: "en" },
];
type personA = { name: string; lang: "ja" };
type personB = { name: string; lang: "en" };

const japanese = persons.filter(
    (person): person is personA => person.lang === "ja"
);
const english = persons.filter(isUserB); //書き方はどちらでもいい！
