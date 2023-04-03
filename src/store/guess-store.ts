import { MAX_CHALLENGES, WORD_LENGHT } from '@/utils';
import { getTodayWordStored } from '@/utils/words';
import { create } from 'zustand';

type State = {
  word: string;
  words: string[];
  currentGuess: string;
  guesses: string[];
  incorrectWord: boolean;
  setWord: (word: string) => void;
  setWords: (words: string[]) => void;
  addCurrentGuessKey: (key: string) => void;
  delCurrentGuessKey: () => void;
  addGuess: () => void;
  getTodayWordStored: () => string;
  setIncorrectWord: (value: boolean) => void;
};

export const useGuessStore = create<State>((set, get) => ({
  word: '',
  words: [],
  guesses: [],
  currentGuess: '',
  incorrectWord: false,
  setWord: (word: string) => set({ word }),
  setWords: (words: string[]) => set({ words }),
  getTodayWordStored: () => getTodayWordStored(get().word),
  addGuess: () => {
    const { currentGuess } = get();

    set(({ guesses }) => ({
      guesses: [...guesses, currentGuess],
      currentGuess: '',
    }));
  },
  addCurrentGuessKey: (key: string) => {
    const { currentGuess } = get();

    if (currentGuess.length === WORD_LENGHT) {
      return;
    }

    set(({ currentGuess }) => ({ currentGuess: currentGuess + key }));
  },
  delCurrentGuessKey: () => {
    const { currentGuess } = get();

    if (!currentGuess.length) {
      return;
    }

    set(({ currentGuess }) => ({ currentGuess: currentGuess.slice(0, -1) }));
  },
  setIncorrectWord: (value: boolean) => {
    set({ incorrectWord: value });
  },
}));
