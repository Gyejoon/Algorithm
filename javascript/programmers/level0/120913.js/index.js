function solution(my_str, n) {
    const answer = [];
    const arrayCount = Math.ceil(my_str.length / n );
    for (let i = 0; i < arrayCount; i++) {
        answer.push(my_str.slice(i * n, (i + 1) * n));
    }
    return answer;
}