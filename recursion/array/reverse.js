const reverseArrayUsingRecursion = (data, start, last) => {
    console.log(data, "data");
    console.log(start,last, "start<last");
    
   if (start<last) {
     let temp = data[start];
     data[start]=data[last]
     data[last]= temp;
     reverseArrayUsingRecursion(data, start+1, last-1)
   }
    
}



const data = [4,9,1,5,7]
reverseArrayUsingRecursion(data, 0, data.length-1)
