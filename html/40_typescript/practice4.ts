function arrElement<T>(arr:T[], index:number){
    if(arr.length -1 < index){
        return false;
    }else{
        return arr[index];
    }
}

console.log(arrElement<string>(["a","b","c"], 2));