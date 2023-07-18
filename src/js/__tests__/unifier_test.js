import Unifier from '../unifier';

test('phone unifier', () => {
  const codeList = ['7', '86'];
  const localList = ['8'];
  const phoneReg = /(?:\+?(\d+)\s*)?[(]?(?:(\d+)[)]?\s*)?(\d+)\s*[-]?\s*(\d+)\s*[-]?\s*(\d+)/;
  const phoneNumbers = ['8 (927) 000-00-00', '+7 960 000 00 00', '+86 000 000 0000'];
  const correct = ['+79270000000', '+79600000000', '+860000000000'];
  const result = [];

  const uninumber = new Unifier(phoneReg, codeList, localList);
  phoneNumbers.forEach((number) => {
    result.push(uninumber.formatPhone(number));
  });

  expect(result).toEqual(correct);
});
