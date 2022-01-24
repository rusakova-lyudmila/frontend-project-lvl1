import { initGame, randomNum } from '../src/index.js';

const gameRules = () => {
  console.log('What number is missing in the progression?');
};

const getQuestionAndAnswer = () => {
  const progressionLength = randomNum(5, 10);
  const progressionDifference = randomNum(1, 9);
  const hiddenElementPosition = randomNum(1, progressionLength) - 1;
  let startElement = randomNum(1, 20);
  const progressionElements = [startElement];

  for (let i = 0; i < progressionLength; i += 1) {
    const newElement = startElement + progressionDifference;
    progressionElements.push(newElement);

    startElement = newElement;
  }

  const rightAnswer = progressionElements[hiddenElementPosition];

  progressionElements.splice(hiddenElementPosition, 1, '..');
  const question = progressionElements.join(' ');

  return [question, String(rightAnswer)];
};

const progressionGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default progressionGame;
