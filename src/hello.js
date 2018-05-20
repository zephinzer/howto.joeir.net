#!/usr/bin/env node
var chalk = require('chalk');
var inquirer = require('inquirer');

var splashImage = [];
splashImage.push(chalk.red('      ___                 '));
splashImage.push(chalk.red('     /__/\\        ___     '));
splashImage.push(chalk.yellow('     \\  \\:\\      /  /\\    '));
splashImage.push(chalk.yellow('      \\__\\:\\    /  /:/    '));
splashImage.push(chalk.green('  ___ /  /::\\  /__/::\\    '));
splashImage.push(chalk.green(' /__/\\  /:/\\:\\ \\__\\/\\:\\__ '));
splashImage.push(chalk.cyan(' \\  \\:\\/:/__\\/    \\  \\:\\/\\'));
splashImage.push(chalk.blue('  \\  \\::/          \\__\\::/'));
splashImage.push(chalk.blue('   \\  \\:\\          /__/:/ '));
splashImage.push(chalk.magenta('    \\  \\:\\         \\__\\/  '));
splashImage.push(chalk.magenta('     \\__\\/                \n'));
splashImage.push(null);

let time = 250;
splashImage.forEach((line) => {
  setTimeout(() => {
    if (line !== null) {
      console.info(line);
    } else {
      start();
    }
  }, process.env.DEBUG ? 0 : (time += 50));
});

var introduction = "\n\
Good to see you here (:\n\
This is Joseph Matthias Goh (@joeir/@zephinzer) and within this package \
you can find things related to my life's work including my resume, links \
to my works and ways to contact me.\n\
Let's get started-\n\0";
function start() {
  var time = 100;
  for (var i = 0; i < introduction.length; ++i) {
    (function(i) {
      var character = introduction.charAt(i);
      var isNewline = (character === '\n');
      setTimeout(() => {
        if (character !== '\0') {
          process.stdout.write(isNewline ? '\n' : '');
          process.stdout.write(character);
        } else {
          reallyStart();
        }
      }, process.env.DEBUG ? 0 : (time += isNewline ? 750 : 20));
    })(i);
  }
};

function reallyStart() {
  const CHOICES = {
    COVER: 'About Me',
    EDUCATION: 'Education',
    PROFESSIONAL: 'Professional Life',
    CONTACT: 'Contacting Me',
    NOTHING: 'Nothing Else (Exit)',
  };
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to know more about?',
      choices: Object.keys(CHOICES).map((i) => CHOICES[i]),
    }
  ]).then((results) => {
    switch(results.choice) {
      case CHOICES.COVER:
        console.info('cover');
        reallyStart();
        break;
      case CHOICES.EDUCATION:
        console.info('education');
        reallyStart();
        break;
      case CHOICES.PROFESSIONAL:
        console.info('professional');
        reallyStart();
        break;
      case CHOICES.CONTACT:
        console.info('contact');
        reallyStart();
        break;
      case CHOICES.NOTHING:
        console.info('bye');
        process.exit(0);
        break;
      default:
        console.info('lol?');
        reallyStart();
    }
  });
};
