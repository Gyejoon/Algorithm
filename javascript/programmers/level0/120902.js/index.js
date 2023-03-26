function solution(my_string) {
    const splited = my_string.split(' ');
    let answer = Number(splited[0]);
    splited.forEach((item, index) => {
        if (item === '+') {
            answer += Number(splited[index + 1]);
        }
        
        if (item === '-') {
            answer -= Number(splited[index + 1]);
        }
    });

    return answer;
}