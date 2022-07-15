const ModalArea = ({ setIsModalOpen }:{
    setIsModalOpen: (isModalOpen: boolean) => void;
}) => {
    return (
        <section>
        <div className='flex justify-center items-center mx-auto mt-8 md:mt-10'>
          <button 
            className='font-semibold py-2 px-10 rounded-lg border text-white uppercase text-2xl' 
            onClick={ () => setIsModalOpen(true) }>{ 'Rules' }</button>
        </div>
      </section>
    )
}

export default ModalArea;