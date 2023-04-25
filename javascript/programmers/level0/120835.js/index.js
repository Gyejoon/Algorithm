function solution(emergency) {
    const answer = {};
    emergency.forEach((item, index) => {
        answer[item] = {
            index,
            rank: 0,
        };
    });
    
    const sorted = emergency.sort((a, b) => b - a);
    sorted.forEach((item, index) => {
        answer[item] = {
            ...answer[item],
            item,
            rank: index + 1
        }
    });
    const newAnswer = [];
    Object.values(answer)
        .sort((a, b) => a.index - b.index)
        .forEach((item) => {
       newAnswer.push(item.rank); 
    });
    return newAnswer;
}