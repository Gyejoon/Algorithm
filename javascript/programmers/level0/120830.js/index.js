function solution(n, k) {
    const sumN = n * 12000;
    const sumK = k * 2000;
    const service = parseInt(n / 10, 10);
    
    return (sumN + sumK) - service * 2000;
}