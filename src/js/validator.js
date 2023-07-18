class Validator {
  constructor(reg) {
    this.reg = reg;
  }

  validateUsername(username) {
    return username.search(this.reg) !== -1;
  }
}

export default Validator;
