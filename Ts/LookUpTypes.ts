//Lock Up Types は新しい型を作ろうとした時に他の型を参照して他のかたのプロパティの型をつけること
type Prop = {
    name: string;
    id: number;
    is_human: boolean;
};

type getProp = Prop["is_human"]; //[""]の中にaを入れるとstringがbを入れるとnumberが取得可能になっている
//このlock up typesがgenericsと合わせて使われている

const usersData: Prop = {
    name: "marumoto",
    id: 111,
    is_human: true,
};

const getprop = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
};

const userData = getprop<Prop,"id">(usersData,"id")
//usersDataのプロパティの合わせた型が取得できた！第二引数を変えるとuserDataの型が変化する！