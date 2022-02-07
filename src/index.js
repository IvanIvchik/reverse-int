module.exports = function reverse (n) {
   let m = 0;
    if (n < 0) {
        m = -n;
    } else m = n;
    let str = m.toString();
    let result = str.split('').reverse().join('');
    return +result; 
}
