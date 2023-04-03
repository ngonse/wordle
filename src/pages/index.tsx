import { useEffect, useState } from 'react';
import { serialize } from 'cookie';
import { GetServerSideProps } from 'next';

import { MAX_CHALLENGES, WORD_LENGHT, WORD_OF_THE_DAY_COOKIE } from '@/utils';
import Grid from '@/components/Grid';
import Keyboard from '@/components/Keyboard';
import { getTodayWord } from '@/utils/words';
import Shell from '@/shells/Shell';
import { useGuessStore } from '@/store/guess-store';

import words from '@/words.json';

type Props = {
  words: string[];
  word: string;
};

export default function Home({ words, word: toGuess }: Props) {
  const {
    currentGuess,
    guesses,
    incorrectWord,
    addGuess,
    setWord,
    setWords,
    addCurrentGuessKey,
    delCurrentGuessKey,
    setIncorrectWord,
  } = useGuessStore();

  const onEnter = () => {
    if (currentGuess.length !== WORD_LENGHT) {
      return;
    }

    if (guesses.length >= MAX_CHALLENGES) {
      return;
    }

    if (!words.includes(currentGuess)) {
      setIncorrectWord(true);
      return;
    }
    addGuess();
  };

  const onKeyPress = (char: string) => {
    addCurrentGuessKey(char);
  };

  const onDelete = () => {
    delCurrentGuessKey();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIncorrectWord(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    setWord(toGuess);
    setWords(words);
  }, []);

  return (
    <Shell>
      <header className="flex justify-center items-center text-white p-2  h-[var(--header-height)] ">
        <h1 className="text-2xl">WORDLE</h1>

        {incorrectWord ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute move-down"
            role="alert"
          >
            <span className="block sm:inline">
              La palabra no esta en la lista
            </span>
          </div>
        ) : null}
      </header>

      <div className="grid grid-rows-4 grid-flow-row h-[calc(100%-var(--header-height))] justify-center">
        <div className="row-span-3 flex justify-center">
          <Grid />
        </div>
        <Keyboard
          onEnter={onEnter}
          onKeyPress={onKeyPress}
          onDelete={onDelete}
        />
      </div>
    </Shell>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res,
}) => {
  let wordCokkie = req.cookies[WORD_OF_THE_DAY_COOKIE];

  if (!wordCokkie) {
    const todayWord = getTodayWord();
    wordCokkie = Buffer.from(todayWord).toString('base64');

    res.setHeader(
      'Set-Cookie',
      serialize(WORD_OF_THE_DAY_COOKIE, wordCokkie, {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: 'strict',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
      }),
    );
  }

  console.log(Buffer.from(wordCokkie, 'base64').toString());

  return {
    props: {
      words,
      word: wordCokkie,
    },
  };
};
