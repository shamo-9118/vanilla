type Props = {
    name: string;
    lang: string;
    id: number;
};

type getStringInProps<T> = {
    [K in keyof T]: T[K] extends string ? K : never;//ここでは制約をかけている
}[keyof T] //最後にプロパティの型がストリングのkeyを返している

type StringKeys = getStringInProps<Props> 

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyType<T, K extends keyof T> = {
    [Key in K]: T[K];
};

const todo: MyType<Todo, "title" | "description" | "completed"> = {
    title: "今日のご飯",
    description: "肉じゃが、味噌汁、おひたし",
    completed: false,
};
