const RulesModal = ({ isOpen, onClose, modeChanged }: {
    isOpen: boolean;
    onClose: () => void;
    modeChanged: boolean;
}) => {
    return isOpen ? (
       <div className="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <div className="bg-white p-10 rounded-xl w-full h-full flex flex-col justify-around items-center md:w-auto md:h-auto">
                <div className="w-full my-25 text-center md:flex md:justify-between md:items-center">
                    <span className="text-5xl font-bold text-Dark-text">RULES</span>
                    <button onClick={() => onClose()} className='hidden md:block'>
                        <img src={'./icon-close.svg'} alt="close" />
                    </button>
                </div>
                <div className="mx-auto md:mt-10">
                    { modeChanged ? <img src={'./image-rules-bonus.svg'} alt="rules" /> : <img src={'./image-rules.svg'} alt="rules" /> }
                </div>
                <button onClick={() => onClose()} className='md:hidden'>
                    <img src={'./icon-close.svg'} alt="close" />
                </button>
            </div>
       </div>
    ) : (<></>)
}

export default RulesModal;