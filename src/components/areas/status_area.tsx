const StatusArea = ({ computerHand, winner, reset }:{
    computerHand: string,
    winner: string,
    reset: () => void
}) => {
    return (
        <section>
            <div className={'text-center mt-5 md:mt-2 '+(!computerHand && ' opacity-0 hidden w-0')}>
                <span 
                    className='text-white text-6xl block mb-4'>
                    { (winner === 'Player') ? 
                        'YOU WIN' : 
                    (winner === 'Computer') ? 
                        'YOU LOSE' : 
                    winner }
            </span>
            <button 
              className='rounded-lg bg-white py-3 px-16 hover:text-Rock-Gradient-1 text-2xl mt-4' 
              onClick={ () => reset() }>
                PLAY AGAIN
            </button>
          </div>
      </section>
    )
}

export default StatusArea;