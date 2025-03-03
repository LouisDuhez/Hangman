import { ComponentPropsWithoutRef } from "react";

interface HangmanProps extends ComponentPropsWithoutRef<'img'> {

}

export const Hangman = (props : HangmanProps)=> {
    return (
        <img {...props}/>
    )
}