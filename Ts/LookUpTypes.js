"use strict";
//このlock up typesがgenericsと合わせて使われている
const usersData = {
    name: "marumoto",
    id: 111,
    is_human: true,
};
const getprop = (obj, key) => {
    return obj[key];
};
const userData = getprop(usersData, "id");
//usersDataのプロパティの合わせた型が取得できた！第二引数を変えるとuserDataの型が変化する！
