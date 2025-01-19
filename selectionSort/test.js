const array = [46, 18, 2, 8, 95, 77, 22, 10, 9,1];
function selectionSort(item) {
  console.log(item, "item");
  let minId;
  for (let i = 0; i < item.length; i++) {
    // console.log(item[i]);
    minId = i;
    for (let j = i + 1; j < array.length; j++) {
        // console.log(item[j] < item[minId], item[j], item[minId])
        
        if (item[j] < item[minId]) {
          minId = j;
        }
    //   console.log(minId, item[minId], "minId -------------------");
    
    
      let temp = item[minId];
      item[minId]= item[i]
      item[i]= temp
      
      
    }
}

console.log(item, "item");

}
selectionSort(array);
