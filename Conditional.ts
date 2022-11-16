type Props = {
    id: string;
    name: string;
    age: number;
};

type Filter<T,U> = { //第一引数にはPropsが第二引数には指定した型がきます！
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];//ここの書き方よくわからないーーー

type StringKeys = Filter<Props,string>;
type NumberKeys = Filter<Props,number>;


const stringKeys: StringKeys = "id"
const numberKeys:NumberKeys = "age"  //どちらの変数も型のキーにあったものが補完で表示される！

