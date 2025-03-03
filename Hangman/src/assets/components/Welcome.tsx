interface WelcomeProps {
    onStart: ()=> void;
}

export const Welcome = ({onStart}: WelcomeProps) => {
    return (
        <div className="welcome">
            <h1>Bienvenue sur le jeu du Pendu !</h1>
            <p>Le but du jeu est de deviner un mot en proposant des lettres</p>
            <p>Vous avez 7 chances pour trouver le mot</p>
            <button onClick={onStart}>Commencer la partie</button>
        </div>
    )
}