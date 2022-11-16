//色々なutility typesを使ってみる
type Property = {
    name: string;
    gender: string;
    id: number;
    country: string;
};

const user = {
    name: "marumoto",
    gender: "men",
    id: 9118,
    country: "japan",
} as const;


console.log(user.id);
