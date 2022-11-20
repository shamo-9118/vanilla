//inferは部分的な型抽出に使うもの
//関数の返り値だけを型として取得したい時の書き方
const loo = () => {
    return [1, 2, 3];
};

type ReturnValue<T> = T extends () => infer U ? U : never;

type LooReturn = ReturnValue<typeof loo>;

const goo = (id:number, name:string) => {
    return "";
};

type GetArgs<T> = T extends (...args: infer U)=> string ? U :never

type Goo = GetArgs<typeof goo>
