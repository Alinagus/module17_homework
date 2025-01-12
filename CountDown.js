
 function countDown(n){
    let count = [n];
    while(n>1){
        count.push(n-1);
        n = n-1;
    }
    return count;
}
module.exports = countDown;
