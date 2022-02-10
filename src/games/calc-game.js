import { initGame, randomNum } from '../index.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];

  return operations[Math.floor(Math.random() * operations.length)];
};

const calcExpression = (firstOperand, secondOperand, operation) => {
  let rightAnswer;

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
      throw new Error("Can't calculate the expression!");
  }

  return rightAnswer;
};

const gameRules = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstOperand = randomNum();
  const secondOperand = randomNum();
  const operation = randomOperation();

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const rightAnswer = calcExpression(firstOperand, secondOperand, operation);

  return [question, String(rightAnswer)];
};

const calcGame = () => {
  initGame(gameRules, getQuestionAndAnswer);
};

export default calcGame;
