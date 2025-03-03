import { useEffect, useState } from 'react';
import './App.css';
import { LetterGallery } from './assets/components/LetterGallery';
import { Word } from './assets/components/Word';
import { Hangman } from './assets/components/Hangman';
import { GameOver } from './assets/components/GameOver';
import { Win } from './assets/components/Win';
import { Welcome } from './assets/components/Welcome';
import { ApiError } from './assets/components/ApiError';

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [word, setWord] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);


  const fetchWord = () => {
    fetch('http://localhost:3333/', {
      method: 'POST'
    })
    .then((response) => response.json())
    .then((data) => {
      setWord(data.word.toUpperCase());
      console.log(data.word.toUpperCase());
    });
  }

  useEffect(() => {
    fetchWord();
  }, [setWord])

  const handleLetterClick = (letter: string) => {
    if (guessedLetters.includes(letter)) {
      setError(`La lettre "${letter}" a déjà été devinée.`);
      return;
    }

    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      setError(null);
    } else {
      setGuessedLetters([...guessedLetters, letter]);
      setError(`La lettre "${letter}" n'est pas dans le mot.`);
      setCount(count + 1);
    }
  };

  const onReset = () => {
    setGuessedLetters([]);
    setWord('');
    setCount(1);
    setError(null);
    fetchWord();
  };

  const allLettersGuessed = () => {
    console.log(word.split('').every((letter) => guessedLetters.includes(letter)));
    return word.split('').every((letter) => guessedLetters.includes(letter));
  };

  const getHangmanImage = () => {
    switch (count) {
      case 1:
        return '/SVG/1.svg';
      case 2:
        return '/SVG/2.svg';
      case 3:
        return '/SVG/3.svg';
      case 4:
        return '/SVG/4.svg';
      case 5:
        return '/SVG/5.svg';
      case 6:
        return '/SVG/6.svg';
      case 7:
        return '/SVG/7.svg';
      case 8:
        return '/SVG/8.svg';
    }
  };

  return (
        <>
          {showWelcome ? (
            <Welcome onStart={() => setShowWelcome(false)}/>
          ) : word.length == 0 ? (<ApiError message="Erreur l'Api ne s'est pas chargée correctement. Veuillez la relancer et rafraichir la page pour pouvoir jouer (npm run dev dans le dossier de l'API)"/>) : allLettersGuessed() ? (<Win word={word} onRestart={onReset} />) : (
            count >=8 ? (<GameOver word={word} onRestart={onReset} />) : (
              <main>
                <div className="Game">
                  <Hangman src={getHangmanImage()} alt='Structure du pendu' />
                  <Word guessedLetters={guessedLetters} word={word} />
                </div>
                <LetterGallery onLetterClick={handleLetterClick} />
                {error && <div className="error">{error}</div>}
              </main>

          ))}
        </>
          

  );
}

export default App;
