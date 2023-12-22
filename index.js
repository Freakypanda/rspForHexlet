#!/usr/bin/env node
/* eslint-disable no-constant-condition */
import readlineSync from 'readline-sync';

const choices = ['rock', 'scissors', 'paper'];
const gameRules = { rock: 'scissors', scissors: 'paper', paper: 'rock' };
const statistics = { computer: 0, user: 0, ties: 0 };

const greetUser = () => {
  console.log('\nWelcome to the "Rock, scissors, paper" game!\n');
  console.log(
    'The rules are fast and easy: choose rock, scissors or paper and write it to the chat.',
  );
  console.log('Rock breaks scissors, scissors cut paper, paper wraps rock.');
  console.log('Have fun!');
};

const getComputerChoice = (list) => {
  const randomIndex = Math.floor(Math.random() * 3);
  return list[randomIndex];
};

const getUserChoice = (list) => {
  while (true) {
    const userChoice = readlineSync
      .question('Your turn: ')
      .trim()
      .toLowerCase();
    if (list.includes(userChoice)) return userChoice;
    console.log('Please, try again!');
  }
};

const getStatistics = (turnsCount) => {
  console.log('\n-- Game statistics --');
  console.log(
    `Turns: ${turnsCount}\nWins: ${statistics.user}\nLosses: ${statistics.computer}\nTies: ${statistics.ties}`,
  );
};

greetUser();
let turnsCount = 0;
let flag = true;
while (flag === true) {
  turnsCount += 1;
  console.log(`\n-- Turn ${turnsCount} --`);
  const computerChoice = getComputerChoice(choices);
  const userChoice = getUserChoice(choices);
  console.log(`Computer: ${computerChoice}`);
  if (computerChoice === userChoice) {
    console.log('Tie!');
    statistics.ties += 1;
  } else if (gameRules[userChoice] === computerChoice) {
    console.log('You win!');
    statistics.user += 1;
  } else {
    console.log('Computer wins!');
    statistics.computer += 1;
  }
  flag = readlineSync.keyInYNStrict('\nWanna play again? ');
}
getStatistics(turnsCount);
console.log('\nThanks for the game! Good bye!');
