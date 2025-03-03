interface LetterProps {
  letter: string;
  onClick: () => void;
}

export const Letter = ({ letter, onClick } : LetterProps) => {
  return (
    <button onClick={onClick}>
      {letter}
    </button>
  );
};