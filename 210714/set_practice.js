var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function makeSet() {
    return new Set();
}
function Add(set, element) {
    set.add(element);
}
function Delete(set, str) {
    set["delete"](str);
}
function Union(setA, setB) {
    return new Set(__spreadArray(__spreadArray([], setA), setB));
}
function Intersection(setA, setB) {
    return new Set(__spreadArray([], setA).filter(function (x) { return setB.has(x); }));
}
function is_member(set, element) {
    return !!set.has(element) ? true : false;
}
function main() {
    var setA = makeSet();
    var setB = makeSet();
    console.log("setA", setA);
    console.log("setB", setB);
    setA.add("A");
    setA.add("B");
    setB.add("C");
    setB.add("D");
    console.log("setA", setA);
    console.log("setB", setB);
    Add(setA, "C");
    console.log("setA", setA);
    Delete(setA, "B");
    console.log("setB", setB);
    var u = Union(setA, setB);
    console.log("union", u);
    var i = Intersection(setA, setB);
    console.log("intersection", i);
    console.log(is_member(setA, "A"));
}
main();
