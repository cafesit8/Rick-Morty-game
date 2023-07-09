import axios from 'axios'
import { create } from 'zustand'
import { Character } from '@/app/interfaces/character'
import heart from '@/public/heart.svg'

interface PropsGlobal {
    points: number,
    attempts: any[],
    character: Partial<Character>
    charactersOptions: string[]
    message: null | string
    disabled: boolean
}

interface Actions {
    getCharacter: (id: number) => void
    getCharactersOptions: (algo: number[]) => void
    morePoints: () => void
    lessAttemps: () => void
    sendMessage: (sms: (null | string)) => void
    reset: () => void
    changedisabled: () => void
}

export const useStore = create<PropsGlobal & Actions>((set) => ({
    points: 0,
    attempts: [heart, heart, heart],
    character: {},
    charactersOptions: [],
    message: null,
    disabled: false,
    getCharacter: async (id) => {
        const req = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const res = await req.data
        set({ character: res })
        set(state => ({
            charactersOptions: [...state.charactersOptions, res.name]
        }))
    },
    getCharactersOptions: async (algo) => {
        set({ charactersOptions: [] })
        algo.map((id: number) => {
            getCharacters(id)
            async function getCharacters(id: number) {
                const req = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                const res = await req.data
                set(state => ({
                    charactersOptions: [...state.charactersOptions, res.name].sort(() => Math.random() - 0.5)
                }))
            }
        })
    },
    morePoints: () => {
        set(state => ({
            points: state.points + 1
        }))
    },
    lessAttemps: () => {
        set(state => ({
            attempts: state.attempts.splice(0, state.attempts.length - 1)
        }))
    },
    sendMessage: (sms) => {
        set({ message: sms })
    },
    changedisabled: () =>{
        set(state => ({ disabled: !state.disabled }))
    },
    reset: () => {
        set({ points: 0, attempts: [heart, heart, heart], message: null })
    }
}))