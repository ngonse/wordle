# Wordle

Wordle is a popular word-guessing game that challenges players to guess a secret five-letter word by guessing different combinations of letters. This repository provides a web-based implementation of the game, built using React, Next.js, TypeScript, and Tailwind CSS.

## Purpose

This repository was created as a personal project to learn and improve skills in React, Next.js, TypeScript, and Tailwind CSS. It is not intended to be a production-ready implementation of Wordle, but rather a learning exercise.

## Installation

To install and run Wordle locally, clone this repository:

```bash
git clone <https://github.com/ngonse/wordle.git>
```

Then, navigate to the wordle directory and run the following command to install the necessary dependencies:

```bash
npm install
```

To start the development server, run:

```bash
npm run dev
```

The app will be available at <http://localhost:3000>.

## How to Play

To start playing Wordle, navigate to the app at <http://localhost:3000>. You will be presented with a blank five-letter word, represented by underscores. Each round, you can guess a five-letter word. The app will respond with a series of colored circles to indicate how many letters in your guess are in the correct position (green) or incorrect position (yellow). If a letter in your guess is not in the secret word, the circle will be gray.

You have a limited number of guesses to correctly guess the word.
