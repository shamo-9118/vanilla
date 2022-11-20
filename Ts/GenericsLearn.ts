//
type Colors = ["red","pink","blue","green"]
type Color = Colors[number] //red pink blue greenが取れる、、なぜ！？

//型 Colors と 型 colorfulは同じ意味を持つ
interface Colorfull {
    length: 4;
    0: "red";
    1: "pink";
    2: "blue";
    3:"green";
}
//この時点でだいぶんへーーって感じ