function getRandomNumber(){
    return Math.floor(Math.random() * 20);
}

function getRandomInputData(inputData: any[]){
    for(var i = 0; i<20; i++)
        inputData.push(getRandomNumber())

    return inputData
}

function Delete(array: any[], targetElement: any, index: number){
    index = index == null ? array.indexOf(targetElement) : index;
    array.splice(index, 1);
}

function Add(array: any[], targetElement: any){
    array.push(targetElement);
}

function LRU(cache: any[], inputData: any[], cacheSize: number){
    for(var i = 0; i < inputData.length; i++){
        console.log("cache", i, cache);

        let isHit = cache.includes(inputData[i]) ? true : false;
        if(isHit){
            Delete(cache, inputData[i], null);
            Add(cache, inputData[i]);
        }
        else{
            let isCacheFull = cache.length < cacheSize ? false: true;
            if(isCacheFull)
                Delete(cache, null, 0);

            Add(cache, inputData[i]);
        }
    }
}

function main(){
    let cacheSize = 10;
    const cache: any[] = [];
    const inputData: any[] = [];

    getRandomInputData(inputData);
    console.log("inputData", inputData);
    
    LRU(cache, inputData, cacheSize);
    console.log("cache", cache);
}

main();

