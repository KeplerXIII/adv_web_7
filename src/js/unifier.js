class Unifier {
  constructor(reg, codeList, localList) {
    this.reg = reg;
    this.codeList = codeList;
    this.localList = localList;
  }

  formatPhone(phoneNumber) {
    const result = this.reg.exec(phoneNumber);
    let countryCode = 'not ident';
    if (phoneNumber[0] === '+' && this.codeList.includes(result[1])) {
      countryCode = `+${result[1]}`;
    }
    if (this.localList.includes(result[1])) {
      countryCode = '+7';
    }
    return countryCode + result[2] + result[3] + result[4] + result[5];
  }
}

export default Unifier;
