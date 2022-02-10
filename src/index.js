import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundCount = 3;

export const randomNum = (min = 2, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const answerQuestion = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};

const failFinishGame = (name) => {
  const failGameMess = `Let's try again, ${name}!`;

  console.log(failGameMess);
};

const successFinishGame = (name) => {
  const successGameMess = `Congratulations, ${name}!`;

  console.log(successGameMess);
};

export const initGame = (gameRules, getQuestionAndAnswer) => {
  const playerName = greeting();

  console.log(gameRules);

  for (let answerCount = 0; answerCount < roundCount; answerCount += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    const answer = answerQuestion(question);

    if (answer !== rightAnswer) {
      const wrongAnswerMess = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;

      console.log(wrongAnswerMess);
      failFinishGame(playerName);

      return;
    }

    console.log('Correct!');
  }

  successFinishGame(playerName);
};
