'use client';

// Page layout for adding post
const AddPostCard = () => {

    return (
        <div className="border-2 border-black w-2/4 h-2/4 rounded-lg p-4">
            <form className="flex flex-col items-center justify-center gap-4">
                {/* User Id */}
                <div className=" w-full h-24 flex">
                    <div  className="flex items-center justify-center w-1/6">
                    <div className="rounded-full border-2 border-black h-16 w-16 flex items-center justify-center">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                    </div>  
                    </div>
                    <input class='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4 rounded-md' placeholder='Enter your username' name="user"/>
                </div>

                {/* Text */}
                <div className=" w-full h-24 flex ">
                    <div className="flex items-center justify-center w-1/6">
                        <h2 className='font-bold'>Text: </h2>
                    </div>
                    <input class='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4 rounded-md'  type="textarea" placeholder='Add your message' name="message" />
                </div>

                {/* Images */}
                <div className=" w-full h-24 flex">
                    <div className="flex items-center justify-center w-1/6">
                        <h2 className='font-bold'>Link: </h2>
                    </div>
                    <input class='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4' placeholder='Add Image Link' name="images" />
                </div>

                {/* Submit Button */}
                <div class='w-full h-24 relative'>
                    <button type='submit' className='absolute right-10 top-5 border-black border-2 h-16 w-28 rounded-lg hover:bg-black hover:text-white'>Post</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostCard;