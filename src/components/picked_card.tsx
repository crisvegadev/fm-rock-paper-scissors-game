import OptionButton from "./option_button"

const PickedCard = ({ hand, winner, text }: {
    hand: string,
    winner: boolean,
    text: string
}) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col-reverse justify-start transition-all duration-1000 '>
                <span className='text-white mt-5 block text-center tracking-widest text-md'>{ text }</span>
                <OptionButton 
                    onClick={() => {}}  
                    type={hand?.toLocaleLowerCase().toString() || ''} 
                    winner={winner}/>
            </div>
        </div>
    )
}

export default PickedCard;