import { useState } from "react";
import { useStore } from "../store/Zustand";
import JSConfetti from 'js-confetti'

interface PropsButton {
    name: string;
}

export default function Button({ name }: PropsButton) {
  const { character, morePoints, lessAttemps, sendMessage, changedisabled, disabled } = useStore()
  const jsConfetti = new JSConfetti()

  function handleClick(){
    changedisabled()
    if(character.name === name){
        jsConfetti.addConfetti()
        sendMessage(`¡Correcto :)! La respuesta es: ${character.name}`)
        setTimeout(() => {
            morePoints()
            sendMessage(null)
            changedisabled()
        }, 2000)
    }else{
        sendMessage(`Incorrecto :( la respuesta era: ${character.name}`)
        setTimeout(() => {
            lessAttemps()
            sendMessage(null)
            changedisabled()
        }, 2000)
    }
  }

  return (
    <button disabled={disabled} onClick={handleClick} className="bg-gray-600/80 w-[250px] rounded-lg py-1 hover:bg-gray-600">{name}</button>
  )
}
