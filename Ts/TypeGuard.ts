//ユーザー定義の型がーどを練習
type UserJapanese = { name: string; id: number; lang: "ja" };
type UserEnglish = { name: string; id: number; lang: "en" };

const getJapanese = (user: UserEnglish | UserJapanese): user is UserEnglish => {
    return user.lang === "en";
};

const getEnglish = (user: UserEnglish | UserJapanese): user is UserJapanese => {
    return user.lang === "ja";
};

const foo = async () => {
    const res = await fetch("");
    const json = await res.json();
    if (getEnglish(json)) {
        return json;
    }
    if (getEnglish(json)) {
        return json;
    }
};
//////////////
