import { initGame, randomNum } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressionLength = randomNum(5, 10);
  const progressionDifference = randomNum(1, 9);
  const hiddenElementPosition = randomNum(1, progressionLength) - 1;
  const startElement = randomNum(1, 20);
  const progressionElements = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const newElement = startElement + i * progressionDifference;
    progressionElements.push(newElement);
  }

  const rightAnswer = String(progressionElements[hiddenElementPosition]);

  progressionElements[hiddenElementPosition] = '..';
  const question = progressionElements.join(' ');

  return [question, rightAnswer];
};

const progressionGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default progressionGame;
