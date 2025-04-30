import { getRandomName } from './names';

console.log('Tusk Design phil package loaded');

export function printRandomName() {
  const name = getRandomName();
  console.log(`Random name inside app phil ... : ${name}`);
}

printRandomName();
