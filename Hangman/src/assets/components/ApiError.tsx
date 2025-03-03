interface ApiErrorProps {
    message: string;
}

export const ApiError = ({message}: ApiErrorProps) => {
    return (
        <div className="api-error">
            <h2>Erreur</h2>
            <p>{message}</p>
        </div>
    )
}