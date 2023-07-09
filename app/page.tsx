import GameBody from "./components/GameBody";

export default async function Home() {
  return (
    <main className="w-full h-screen text-white p-3 grid place-content-center bg-bg relative main">
      <h1 className="z-10 text-center mb-3 font-bold text-2xl">Adivina el personaje</h1>
      <GameBody/>
    </main>
  )
}
