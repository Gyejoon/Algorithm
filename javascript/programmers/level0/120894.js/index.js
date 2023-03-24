function solution(numbers) {
    keys.forEach((key, index) => {
        numbers = numbers.replaceAll(key, index);
    });
    return Number(numbers);
}

const keys = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];