import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundCount = 3;

export const randomNum = (min = 2, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const answerQuestion = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const checkAnswer = (answer, rightAnswer) => {
  const isCorrect = answer === rightAnswer;
  const checkAnswerMess = isCorrect ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;

  console.log(checkAnswerMess);

  return isCorrect;
};

const countAnswer = (answerCount, isCorrect) => {
  const answerAmount = isCorrect ? answerCount + 1 : answerCount;

  return answerAmount;
};

const finishGame = (isCorrect, name) => {
  const finishGameMess = isCorrect ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

  console.log(finishGameMess);
};

export const initGame = (gameRules, getQuestionAndAnswer) => {
  const playerName = greeting();

  console.log(gameRules);

  let isCorrect = true;
  let answerCount = 0;

  while (answerCount < roundCount && isCorrect) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    const answer = answerQuestion(question);

    isCorrect = checkAnswer(answer, rightAnswer);
    answerCount = countAnswer(answerCount, isCorrect);
  }

  finishGame(isCorrect, playerName);
};
