const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrLink: [],
  
  getLength() {
    return this.arrLink.length;
  },
  
  addLink(value) {
    arguments.length > 0
    ? this.arrLink.push("( " + String(value) + " )")
    : this.arrLink.push("()");
    return this;
  },
  removeLink(position) {
    if (typeof position === "number") {
      this.arrLink.splice(position - 1, 1);
      return this;
    } else {
      this.arrLink.splice(0, this.getLength());
      throw new Error("Error");
    }
  },
  reverseChain() {
    this.arrLink.reverse();
    return this;
  },
  finishChain() {
    let result = this.arrLink.join("~~");
    this.arrLink.splice(0, this.getLength());
    return result;
  },
};

module.exports = chainMaker;
