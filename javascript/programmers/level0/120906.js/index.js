function solution(n) {
    const strN = String(n);
    let answer = 0;
    for(let i = 0; i < strN.length; i++) {
       answer += Number(strN[i]);
    }
    return answer;
}