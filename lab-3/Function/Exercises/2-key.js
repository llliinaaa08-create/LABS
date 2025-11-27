function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters[random(characters.length - 1)];
  }
  return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));

