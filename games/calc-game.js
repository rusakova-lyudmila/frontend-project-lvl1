import { initGame, randomNum } from '../src/index.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];

  return operations[Math.floor(Math.random() * operations.length)];
};

const gameRules = () => {
  console.log('What is the result of the expression?');
};

const getQuestionAndAnswer = () => {
  const firstOperand = randomNum();
  const secondOperand = randomNum();
  const operation = randomOperation();

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  let rightAnswer = 0;

  switch (operation) {
    case '+':
      rightAnswer = firstOperand + secondOperand;
      break;
    case '-':
      rightAnswer = firstOperand - secondOperand;
      break;
    case '*':
      rightAnswer = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  return [question, String(rightAnswer)];
};

const calcGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default calcGame;
