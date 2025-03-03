interface WinProps {
    word: string;
    onRestart: () => void;

}

export const Win = ({word, onRestart} : WinProps)=> {
    return (
        <div className="game-over">
            <h2>Game Over</h2>
            <p>Vous avez gagné ! le mot était {word}</p>
            <button onClick={onRestart}>Recommencer la partie !</button>
        </div>
    )
}