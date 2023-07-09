'use client'
import Loading from '@/app/components/loading'
import { useGetCharacters } from "../hooks/character"
import Button from './Button'
import Message from './Message'
import Header from './Header'

export default function GameBody() {
  const { character, charactersOptions, points, attempts, message } = useGetCharacters()

  if(!character && !charactersOptions) return <Loading />
  if(character.image === undefined) return <Loading />

  return (
    <section className="z-10 w-full sm:w-[500px] flex flex-col gap-3 items-center">
        <Header points={points} attempts={attempts} character={character} />
        <div className='w-full flex flex-col gap-3 items-center'>
            {charactersOptions.map(character => (
                <Button key={character} name={character} />
            ))}
        </div>
        {message && <Message message={message} />}
    </section>
  )
}
