import Validator from '../validator';

test('validator', () => {
  const reg = /^(?!.*[0-9]{4})[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
  const usernameValidator = new Validator(reg);
  const usernames = ['Bobik1220', 'Alice_123', 'JohnDoe', 'Bob1234Marley'];
  const correct = [false, false, true, false];
  const result = [];

  usernames.forEach((username) => {
    result.push(usernameValidator.validateUsername(username));
  });

  expect(result).toEqual(correct);
});
