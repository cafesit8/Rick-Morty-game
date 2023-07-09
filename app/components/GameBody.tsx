'use client'
import Loading from '@/app/components/loading'
import { useGetCharacters } from "../hooks/character"
import Button from './Button'
import Message from './Message'
import Heart from './Heart'

export default function GameBody() {
  const { character, charactersOptions, points, attempts, message } = useGetCharacters()

  if(!character && !charactersOptions) return <Loading />
  if(character.image === undefined) return <Loading />

  return (
    <section className="z-10 w-full sm:w-[500px] flex flex-col gap-3 items-center">
        <header className='overflow-hidden flex flex-col gap-3'>
            <h2 className='text-center text-white/80'>Su puntaje es <strong className='bg-black/60 py-1 px-2 rounded-lg'>{points}</strong></h2>
            <div className='flex justify-center gap-3'>
                {attempts.map((attemp, i)=> (
                    <Heart key={i} />
                ))}
            </div>
            <picture>
                <img className='w-[250px] h-full object-contain' src={`${character.image!}`} width={200} height={200} alt={`imagen de ${character.name!}`} />
            </picture>
        </header>
        <div className='w-full flex flex-col gap-3 items-center'>
            {charactersOptions.map(character => (
                <Button key={character} name={character} />
            ))}
        </div>
        {message && <Message message={message} />}
    </section>
  )
}
