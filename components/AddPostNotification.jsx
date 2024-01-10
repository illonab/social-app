'use client';

const AddPostNotification = ({ uploadState }) => {
    return (
        <div className={`h-16 w-72 rounded-lg p-1 shadow-lg ${uploadState ? 'bg-green-500' : 'bg-red-500'}`}>
            <div className='border-2 h-full w-full rounded-lg border-black flex items-center justify-around px-4'>
                {uploadState ? (<img src="/smile.png" className='h-10 w-10' />) : (<img src="/sad.png" className='h-10 w-10' />)}
                {uploadState ? (<h2 className='font-bold'>Post was added !</h2>) : (<h2 className='font-bold'>Post was unsuccessful !</h2>)}
            </div>
        </div>
    );
}

export default AddPostNotification;
