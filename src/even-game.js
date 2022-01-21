import readlineSync from 'readline-sync';
import greeting from './cli.js';

const randomNumber = () => {
  const min = 1;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const evenGame = () => {
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isCorrect = true;
  let answerCount = 0;

  while (answerCount < 3 && isCorrect) {
    const randomNum = randomNumber();
    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    isCorrect = answer === rightAnswer;

    if (isCorrect) {
      answerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  }

  if (!isCorrect) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenGame;
