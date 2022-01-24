import { initGame, randomNumber } from '../src/index.js';

const gameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getQuestionAndAnswer = () => {
  let firstNumber = randomNumber();
  let secondNumber = randomNumber();
  const question = `${firstNumber} ${secondNumber}`;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }

  const rightAnswer = firstNumber;

  return [question, String(rightAnswer)];
};

const gcdGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default gcdGame;
