const repeatedString = (str) => {

  let Obj = {}
  for(let key of str){
    console.log(key);
    Obj[key] = (Obj[key]+0) || 1
  }

  console.log(Obj);
  
}

repeatedString("sgagahahaji")
