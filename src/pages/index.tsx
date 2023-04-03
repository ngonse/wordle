import { useEffect } from 'react';
import { serialize } from 'cookie';
import { GetServerSideProps } from 'next';

import { WORD_OF_THE_DAY_COOKIE } from '@/utils';
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
    addGuess,
    setWord,
    setWords,
    addCurrentGuessKey,
    delCurrentGuessKey,
  } = useGuessStore();

  const onEnter = () => {
    addGuess();
  };

  const onKeyPress = (char: string) => {
    addCurrentGuessKey(char);
  };

  const onDelete = () => {
    delCurrentGuessKey();
  };

  useEffect(() => {
    setWord(toGuess);
    setWords(words);
  }, []);

  return (
    <Shell>
      <header className="flex justify-center items-center text-white p-2  h-[var(--header-height)] ">
        <h1 className="text-2xl">WORDLE</h1>
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
