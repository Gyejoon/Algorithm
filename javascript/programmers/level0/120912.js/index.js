function solution(array) {
    var answer = 0;
    array.forEach((item) => {
       let strItem = String(item);
       for (let i = 0; i < strItem.length; i++) {
           if (strItem[i] === '7') {
               answer++;
           }
       }
    });
    return answer;
}