function solution(numer1, denom1, numer2, denom2) {
    const numer1Prod = numer1 * denom2;
    const numer2Prod = numer2 * denom1;
    const denom = denom1 * denom2;
    // 기본 분수의 덧셈 결과
    const answer = [numer1Prod + numer2Prod, denom];
    // 최대 공약수로 분수를 나누어준다. (기약 분수로)
    const gcdNum = gcd(answer[0], answer[1]);
    
    return [answer[0] / gcdNum, answer[1] / gcdNum];
}

// 최대 공약수 유클리제 호제법
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);