function solution(array) {
    const maxValue = Math.max(...array);
    return [maxValue, array.findIndex(item => item === maxValue)];
}