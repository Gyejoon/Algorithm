function solution(A, B) {
    if (A === B) {
        return 0;
    }
    
    let answer = 0;
    let correct = false;
    const arrayString = A.split('');
    for (let i = 0; i < A.length; i++) {
        arrayString.unshift(arrayString[arrayString.length - 1]);
        arrayString.pop();
        const newString = arrayString.join('');
        answer += 1;
        if (newString === B) {
            correct = true;
            break;
        }
    }
    return correct ? answer : -1;
}