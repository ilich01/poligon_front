//  https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
        const vowels = 'aeiou';
        let count = 0;
        
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }



    function getCount(str) {
        let m =str.match(/[aeiou]/g)
         return m ? m.length:0 
      }