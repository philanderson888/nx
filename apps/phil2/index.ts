import { getRandomName } from './names';

console.log('Tusk Design phil2 package loaded');

export function printRandomName() {
  const name = getRandomName();
  console.log(`Random name inside app phil2 ... : ${name}`);
}

printRandomName();