const nums = [1,2,3,4,5,6,7,8,9,10,11];

for (x in nums) {
    if (x == 5) {
        break;
    } 
    console.log(`indice = ${x} x = ${nums[x]}`);
}

for (y in nums) {
    if (y == 5) {
        continue;
    } 
    console.log(`indice = ${y} y = ${nums[y]}`);
}