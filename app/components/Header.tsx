import Heart from './Heart'
import { Character } from '@/app/interfaces/character'

interface PropsHeader {
    attempts: number[],
    points: number,
    character: Partial<Character>
}

export default function Header({ attempts, points, character }: PropsHeader) {
  return (
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
  )
}
