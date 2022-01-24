import { initGame, randomNum } from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  let firstNumber = randomNum();
  let secondNumber = randomNum();
  const question = `${firstNumber} ${secondNumber}`;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }

  const rightAnswer = String(firstNumber);

  return [question, rightAnswer];
};

const gcdGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default gcdGame;
