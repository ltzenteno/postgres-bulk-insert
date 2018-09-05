const createRandomFirstName = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
};

const createRandomFirstSurname = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
};

const createRandomSecondSurname = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
};

const createEmail = name => `${name}@mail.com`;

const createPassword = () => {
  return 'ccee5504c9d889922b101124e9e43b71';
};

module.exports = {
  createRandomFirstName,
  createRandomFirstSurname,
  createRandomSecondSurname,
  createEmail,
  createPassword
};
