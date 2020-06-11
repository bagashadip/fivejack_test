function solution(N, users) {
  var answer = [];
  var valuesOfRate = [];
  for (let i = 1; i < N + 1; i++) {
    let num = 0;
    for (let j = 0; j < users.length; j++) {
      if (users[j] < i + 1) {
        users.splice(j, 1);
        num++;
        j--;
      }
    }
    valuesOfRate.push(num / (users.length + num));
    answer.push(i);
  }

  // Sort Descending with bubble sort
  for (let x = 0; x < valuesOfRate.length; x++) {
    for (let y = 0; y < valuesOfRate.length; y++) {
      if (valuesOfRate[y] < valuesOfRate[y + 1]) {
        let tempNum = valuesOfRate[y];
        valuesOfRate[y] = valuesOfRate[y + 1];
        valuesOfRate[y + 1] = tempNum;

        let tempStage = answer[y];
        answer[y] = answer[y + 1];
        answer[y + 1] = tempStage;
      }
    }
  }

  return answer;
}

// ============ Question ============
// N: 5;
// users: [2, 1, 2, 6, 2, 4, 3, 3];
// answer: [3, 4, 2, 1, 5];

// N: 4;
// users: [4, 4, 4, 4, 4];
// answer: [4, 1, 2, 3];
// ============ Question ============

// ============ Driver ============
let N = 5;
let users = [2, 1, 2, 6, 2, 4, 3, 3];

// let N = 4;
// let users = [4, 4, 4, 4, 4];
console.log(solution(N, users));
// ============ Driver ============

// ========== My exercise before implement to code ==========
// N: 5;
// users: [2, 1, 2, 6, 2, 4, 3, 3];
// answer: [3, 4, 2, 1, 5];

// Total Players = 8
// N + 1 = 2
// Fail rule = < 2
// current = 2, 2, 6, 2, 4, 3, 3
// Fail rate = 1/8 = 0.125

// Total Players = 7
// N + 1 = 3
// Fail rule = < 3
// current = 6, 4, 3, 3
// Fail rate = 3/7

// Total Players = 4
// N + 1 = 4
// Fail rule = < 4
// current = 6, 4
// Fail rate = 2/4

// Total Players = 2
// N + 1 = 5
// Fail rule = < 5
// current = 6
// Fail rate = 1/2

// Total Players = 1
// N + 1 = 6
// Fail rule = < 6
// current = 6
// Fail rate = 0/1

// ============= Implement Answer =============
// [1/8, 3/7, 2/4, 1/2, 0/1]
// [0.125, 0.42857142857142855, 0.5, 0.5, 0];
// After sorted => [ 0.5, 0.5, 0.42857142857142855, 0.125, 0 ]
// answer: [3, 4, 2, 1, 5];
