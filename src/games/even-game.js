import { initGame, randomNum } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = randomNum();
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const evenGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default evenGame;
