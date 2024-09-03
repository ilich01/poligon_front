//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript


function digitalRoot(n) {
    while (n >= 10) {
        let sum = 0;
        for (let i of n.toString()) {
            sum += +i;
        }
        n = sum;
    }

    return n;
}