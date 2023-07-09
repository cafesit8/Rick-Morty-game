export default function Message({message}: {message: string}) {
  return (
    <div className='bg-black/40 py-1 px-3'>
        <p className={`${message.includes('Incorrecto') ? 'text-red-400': 'text-green-400'} text-center font-normal block`}>{message}</p>
    </div>
  )
}
