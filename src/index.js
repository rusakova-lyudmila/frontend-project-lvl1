import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundCount = 3;

export const randomNumber = () => {
  const min = 1;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const answerQuestion = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const checkAnswer = (answer, rightAnswer) => {
  const isCorrect = answer === rightAnswer;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }

  return isCorrect;
};

const countAnswer = (answerCount, isCorrect) => {
  if (isCorrect) {
    return answerCount + 1;
  }

  return answerCount;
};

const finishGame = (isCorrect, name) => {
  if (!isCorrect) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export const initGame = (gameRules, getQuestionAndAnswer) => {
  const name = greeting();

  gameRules();

  let isCorrect = true;
  let answerCount = 0;
  let [question, rightAnswer] = getQuestionAndAnswer();

  while (answerCount < roundCount && isCorrect) {
    const answer = answerQuestion(question);

    isCorrect = checkAnswer(answer, rightAnswer);
    answerCount = countAnswer(answerCount, isCorrect);
    [question, rightAnswer] = getQuestionAndAnswer();
  }

  finishGame(isCorrect, name);
};
