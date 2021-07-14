function makeSet(){
    return new Set<any>();
}
function Add(set: Set<any>, element: string){
    set.add(element);
}

function Delete(set: Set<any>, str: string){
    set.delete(str);
}

function Union(setA: Set<any>, setB: Set<any>): Set<any>{
    return new Set([...setA, ...setB]);
}

function Intersection(setA: Set<any>, setB: Set<any>){
    return new Set([...setA].filter(x=>setB.has(x)));
}

function is_member(set: Set<any>, element: string){
    return !!set.has(element) ? true : false;
}


function main(){
    const setA = makeSet();
    const setB = makeSet();
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

    const u = Union(setA, setB);
    console.log("union", u);

    const i = Intersection(setA, setB);
    console.log("intersection", i);

    console.log(is_member(setA, "A"));
}

main();