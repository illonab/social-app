const AddPostNotification = ({ isError, setIsSubmit }) => {

    const handleClick = () => {
        setIsSubmit(false);
    }

    return (
        <div onClick={handleClick} className={`h-16 w-72 rounded-lg p-1 shadow-lg bg-white`}>
            <div className={`border-2 h-full w-full rounded-lg border-black flex items-center justify-around px-4 shadow-lg ${!isError ? 'bg-green-300' : 'bg-red-300'}`}>
                {!isError ? (<img src="/smile.png" className='h-10 w-10' />) : (<img src="/sad.png" className='h-10 w-10' />)}
                {!isError ? (<h2 className='font-bold'>Post was added !</h2>) : (<h2 className='font-bold'>Post was unsuccessful !</h2>)}
            </div>
        </div>
    );
}

export default AddPostNotification;
