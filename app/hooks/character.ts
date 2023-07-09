'use client'
import { useEffect } from "react";
import { useStore } from "../store/Zustand";

export function useGetCharacters(){
  const { getCharacter, character, getCharactersOptions, charactersOptions, points, attempts, reset, message } = useStore()

  useEffect(() => {
    if(attempts.length !== 0){
        const number = Math.floor(Math.random() * 100) + 1;
        const numbers: number[] = []
        if(numbers.length < 5){
            for (let i = 0; i < 4; i++) {
                const randomNumber = Math.floor(Math.random() * 100) + 1;
                if(randomNumber !== number){
                    if(!numbers.includes(randomNumber)){
                        numbers.push(randomNumber)
                    }else{ continue }
                }
            }
        }
        getCharacter(number)
        getCharactersOptions(numbers)
    }else{
        alert('Empezar de nuevo')
        reset()
    }
  }, [points, attempts])
  
  return {
    character, charactersOptions, points, attempts, reset, message
  }
}