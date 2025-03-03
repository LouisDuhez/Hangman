interface WordProps {
  guessedLetters: string[];
  word: string;
}

export const Word = ({ guessedLetters, word} : WordProps) => {

  return (
    <div className="word">
      {word.split('').map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};