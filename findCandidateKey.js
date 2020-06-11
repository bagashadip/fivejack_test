function solution(relation) {
  var answer = 0;
  for (let i = 0; i < relation[0].length; i++) {
    let tempArr = [];
    for (let j = 0; j < relation.length; j++) {
      tempArr.push(relation[j][i]);
    }
    let isUnique = tempArr.length === new Set(tempArr).size; // ES6 "Set" for check unique array values

    if (isUnique) {
      answer++;
    } else {
      if (i !== relation[0].length - 1) {
        for (let j = 0; j < relation.length; j++) {
          tempArr[j] = tempArr[j] + relation[j][i + 1];
        }

        let isUniqueCandidate = tempArr.length === new Set(tempArr).size; // ES6 "Set" for check unique array values
        if (isUniqueCandidate) {
          answer++;
        }
      }
    }
  }
  return answer;
}

var relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

console.log(solution(relation));
