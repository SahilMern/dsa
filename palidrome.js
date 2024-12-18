const checkPalidrome = (string) => {
    const data = string.split("").reverse().join("") 
    console.log(data);
    
    return data === string
}
checkPalidrome("lilil")