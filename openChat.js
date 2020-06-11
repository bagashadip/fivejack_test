function solution(record) {
  var answer = [];
  var logChat = [];
  for (let i = 0; i < record.length; i++) {
    var splitRecord = record[i].split(" ");
    if (splitRecord[0] === "Enter") {
      logChat.push({
        uid: splitRecord[1],
        name: splitRecord[2],
        status: "enter",
      });
    }
    if (splitRecord[0] === "Leave") {
      var name = null;
      for (let i = 0; i < record.length; i++) {
        var tempRecord = record[0].split(" ");
        if (tempRecord[1] === splitRecord[1] && tempRecord[2]) {
          name = tempRecord[2];
          break;
        }
      }
      logChat.push({
        uid: splitRecord[1],
        name: name,
        status: "leave",
      });
    }
  }

  for (let i = 0; i < record.length; i++) {
    var splitRecord = record[i].split(" ");
    if (splitRecord[0] === "Enter") {
      for (let x = 0; x < logChat.length; x++) {
        if (logChat[x]["uid"] === splitRecord[1]) {
          logChat[x]["name"] = splitRecord[2];
        }
      }
    }
    if (splitRecord[0] === "Change") {
      var uId = splitRecord[1];
      for (let j = 0; j < logChat.length; j++) {
        if (logChat[j]["uid"] === uId) {
          logChat[j]["name"] = splitRecord[2];
        }
      }
    }
  }

  for (let x = 0; x < logChat.length; x++) {
    if (logChat[x]["status"] === "enter") {
      answer.push(logChat[x]["name"] + " came in.");
    }
    if (logChat[x]["status"] === "leave") {
      answer.push(logChat[x]["name"] + " has left.");
    }
  }

  return answer;
}

// let record = [
//   "Enter uid1234 Muzi",
//   "Enter uid4567 Prodo",
//   "Leave uid1234",
//   "Enter uid1234 Prodo",
//   "Change uid4567 Ryan",
// ];

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]
console.log(solution(record));
