import {Letter} from './Letter'
const letterList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z']

interface LetterGalleryProps {
    onLetterClick: (letter: string) => void;
}

export const LetterGallery = ({ onLetterClick } : LetterGalleryProps) => {
    return (
      <div className='letter-gallery'>
        {letterList.map((letter, index) => (
          <Letter key={index} letter={letter} onClick={() => onLetterClick(letter)} />
        ))}
      </div>
    );
  };