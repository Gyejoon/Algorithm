function solution(age) {
    const ageStr = String(age);
    let answer = '';
    for (let i = 0; i < ageStr.length; i++) {
        answer += String.fromCharCode(Number(ageStr[i]) + 97);
    }
    return answer;
}