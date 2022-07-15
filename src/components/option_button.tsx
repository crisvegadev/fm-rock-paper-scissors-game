const OptionButton = ({ onClick, type, winner }: {
    onClick: () => void;
    type: string;
    winner: boolean;
}) => {
    return (
        <button 
            onClick={() => onClick()} 
            className={'p-4 block rounded-full duration-500 mx-1 xs:mx-4 md:mx-2 my-4 btn-option ' + type + ' ' + (winner && ' pulse ')}>
            <div className={'w-24 h-24 flex justify-center items-center  rounded-full option-div md:w-32 md:h-32 '+type}>
                { type ? <img src={`./icon-${type}.svg`} alt={type} className='w-10' /> 
                : <div className="bg-black bg-opacity-10 p-24 rounded-full"></div> }
            </div>
        </button>
    );
}

export default OptionButton