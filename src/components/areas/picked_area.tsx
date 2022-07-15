import PickedCard from "../picked_card";

const PickedArea = ({ playerHand, computerHand, winner }:{
    playerHand: string,
    computerHand: string,
    winner: string,
}) => {
    return (
        <section className={(playerHand ? '' : 'hidden' ) + ' mt-10 mb-14 select-none'}>
            <div className='flex justify-center items-center px-10'>

            <PickedCard 
                hand={playerHand || ''} 
                winner={winner === 'Player'} 
                text={'YOU PICKED'} />
        
            <PickedCard 
                hand={computerHand || ''} 
                winner={winner === 'Computer'} text={'THE HOUSE PICKED'} />
          
        </div>
      </section>
    )
}

export default PickedArea;