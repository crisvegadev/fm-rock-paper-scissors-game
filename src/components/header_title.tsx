const HeaderTitle = ({ score, changeMode, isChangedMode, }: {
    score:number,
    changeMode:(changed: boolean) => void,
    isChangedMode: boolean,
}) => {
    return (
        <section className="">
            <div className='flex justify-between items-center border-4 border-Header-Outline rounded-lg mx-4 mt-6 px-4 py-5 max-w-2xl md:mx-auto h-auto'>
                <div className=''>
                    { isChangedMode ? <img src="./logo-bonus.svg" alt=""  className="h-24"/>
                     : <img src="./logo.svg" alt="" className="h-16"/> }
                </div>
                <div className='bg-white text-center px-6 py-2 rounded-lg'>
                    <span className='block text-sm text-Header-Outline font-bold'>SCORE</span>
                    <span className='block font-bold text-4xl text-Header-Outline'>{ score }</span>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="flex items-center justify-center w-full mb-12">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                    <div className="mr-3 font-medium text-white">NORMAL MODE</div>
                    <div className="relative">
                        <input 
                            type="checkbox" 
                            id="toggleB" 
                            className="sr-only" 
                            onChange={(e) => changeMode(e.target.checked)}/>
                        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                    </div>
                    <div className="ml-3 font-medium text-white">BONUS MODE</div>
                </label>
                </div>
            </div>
        </section>
    )   
}

export default HeaderTitle;