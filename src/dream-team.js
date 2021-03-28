const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretname = [];
  if (!Array.isArray(members)) return false;
  members.forEach((member) => {
    if (typeof member == "string") {
      secretname.push(member.trim()[0].toUpperCase());
    }
    return secretname;
  });
  return secretname.length ? secretname.sort().join("") : false;
};
