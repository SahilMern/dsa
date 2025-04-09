const arrayReversOnPlace = [1,2,3,4,5,6,7,8];
let start = 0
let end = arrayReversOnPlace.length-1;

while(start<end){
  let temp = arrayReversOnPlace[start]
  arrayReversOnPlace[start] = arrayReversOnPlace[end]
  arrayReversOnPlace[end]= temp
  start++
  end--
}

console.log(arrayReversOnPlace, "arrayReversOnPlace");
