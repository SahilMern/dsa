const removerDublicate = (...array) => {
    const data = array.flat();
    console.log(data);
    let obj= {}
    for(let num of data){
        obj[num]=(obj[num] || 0) + 1
    }
    console.log(obj);
    let result = Object.keys(obj).filter((key) => {
        // console.log(obj[key]===1);
        return obj[key] ===1;
    }).map(Number);
    console.log(result, "data");
    return result;
    
}
removerDublicate([1,2,2,3], [4,4,5,3])