const findInterSection = (nums1, nums2) => {
    let map = {};
    let result = [];

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    console.log(map, "map");
    
    for (let num of nums2) {
        // console.log(num);s
        console.log(num,map[num], "v" );
        
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }
    return result;
}
console.log(findInterSection([4,2,1,3], [2,1,3]));

