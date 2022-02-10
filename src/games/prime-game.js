import { initGame, randomNum } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = randomNum();

  let isPrime = true;
  let i = 2;

  while (i <= Math.sqrt(question) && isPrime) {
    isPrime = question % i !== 0;
    i += 1;
  }

  const rightAnswer = isPrime ? 'yes' : 'no';

  return [question, rightAnswer];
};

const calcGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default calcGame;
