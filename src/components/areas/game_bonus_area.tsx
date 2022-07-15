import OptionButton from "../option_button";

const GameBonusArea = ({ playerHand, play }: {
    playerHand: string,
    play: (type: string) => void
}) => {
    return (
        <section className={ (playerHand ? 'hidden' : '')+' mt-16 mb-0 relative penta' }>
            <div className='flex flex-wrap-reverse justify-center items-center mx-auto xs:max-w-sm sm:max-w-sm md:max-w-md'>
                <OptionButton 
                    onClick={ () => play('lizard') }  
                    type={'lizard'} 
                    winner={false} />
      
                <OptionButton 
                    onClick={ () => play('rock') }  
                    type={'rock'} 
                    winner={false} />          

                <OptionButton 
                    onClick={ () => play('spock') }  
                    type={'spock'} 
                    winner={false} />

                <OptionButton 
                    onClick={ () => play('paper') }  
                    type={'paper'} 
                    winner={false} />

                <OptionButton 
                    onClick={ () => play('scissors') }  
                    type={'scissors'} 
                    winner={false} />
            </div>
        </section>
    )
}

export default GameBonusArea;