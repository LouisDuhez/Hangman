interface GameOverProps{
    word: string;
    onRestart: () => void;
}

export const GameOver = ({word, onRestart}: GameOverProps) => {
    return (
        <div className="game-over">
            <h2>Game Over</h2>
            <p>Vous avez perdu le mot était {word}</p>
            <button onClick={onRestart}>Recommencer la partie !</button>
        </div>
    )
} 