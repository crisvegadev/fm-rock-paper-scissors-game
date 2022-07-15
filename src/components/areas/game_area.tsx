import OptionButton from "../option_button";

const GameArea = ({ playerHand, play }: {
    playerHand: string,
    play: (type: string) => void
}) => {
    return (
        <section className={(playerHand ? 'hidden' : '')+' mt-16 mb-0 relative triangle'}>
            <div className='flex flex-wrap justify-center items-center mx-auto xs:max-w-sm sm:max-w-sm md:max-w-md'>
                <OptionButton 
                    onClick={() => play('paper')}  
                    type={'paper'} 
                    winner={false} />

                <OptionButton 
                    onClick={() => play('scissors')}  
                    type={'scissors'} 
                    winner={false} />

                <OptionButton 
                    onClick={() => play('rock')}  
                    type={'rock'} 
                    winner={false} />
            </div>
        </section>
    )
}

export default GameArea;