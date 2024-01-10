'use client';

import { useState } from "react";

// Page layout for adding post
const AddPostCard = () => {
   // const [posts, setPosts] = useState([]);

    // const [postObj, setPostObj] = useState({
    //     "user": "",
    //     "text": "",
    //     "images": "",
    //     "likes": 0,
    // });

    // Where we store user information. setPostObj is a function that resets postObj;
    const [postObj, setPostObj] = useState({});

    // When a user interacts with the page. The postObj gets updated with whatever value they inputted -> onChange
    const handleInput = (event) => {
        setPostObj({...postObj, [event.target.name]: event.target.value});
    }
    
    // Deals with adding post to local storage
    const handleAddPost = (event) => {
        // Prevents the page from re-rendering (Error handling)
        event.preventDefault();

        // Checks that the post has both a username and text/message
        if (!postObj.username || !postObj.text) {
            // If not it returns (Doesn't add to local)
            return;
        }

        // Getting the data from the local storage
        //Ilona - Changed const to let because we are reasigning it to empty []
        let existingPosts = JSON.parse(localStorage.getItem('posts')); // Posts is the name of the key in the local storage. So we can access

        //Ilona - changed return to existingPosts = [] to handle empty local storage case
        // Error Handling: If there is no 'posts' in local storage, nothing will happen
        if (!existingPosts) {
            existingPosts = [];
        }
        
        // Resets the PostObj, with the updated data (Line 20)
        //Ilona - merged this logic into the posts for optimization
        // setPostObj(() => { 
        //     // Returns the back to postObj + with the Likes Key and 0 Value
        //     return {...postObj, likes: 0}
        // });

        // Concats the existing post with the new post
        const posts = [...existingPosts, {...postObj, likes: 0, hashtags: postObj.hashtags.split(" ")}];

        // Update Local storage with the existing and new post
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    return (
        <div className="border-2 border-black w-2/4 h-2/4 rounded-lg p-4">
            <form onSubmit={handleAddPost} className="flex flex-col items-center justify-center gap-4">
                {/* User Id */}
                <div className=" w-full h-24 flex">
                    <div  className="flex items-center justify-center w-1/6">
                    <div className="rounded-full border-2 border-black h-16 w-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                    </div>  
                    </div>
                    <input onChange={handleInput} className='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4 rounded-md' placeholder='Enter your username' name="username"/>
                </div>

                {/* Text */}
                <div className=" w-full h-24 flex ">
                    <div className="flex items-center justify-center w-1/6">
                        <h2 className='font-bold'>Text: </h2>
                    </div>
                    <input onChange={handleInput} className='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4 rounded-md'  type="textarea" placeholder='Add your message' name="text" />
                </div>

                {/* Images */}
                <div className=" w-full h-24 flex">
                    <div className="flex items-center justify-center w-1/6">
                        <h2 className='font-bold'>Link: </h2>
                    </div>
                    <input onChange={handleInput} className='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4' placeholder='Add Image Link' name="images" />
                </div>

                {/* Hashtags */}
                <div className="w-full h-24 flex">
                    <div className="flex items-center justify-center w-1/6">
                        <h2 className='font-bold'>Hashtags: </h2>
                    </div>
                    <input onChange={handleInput} className='w-3/4 h-23 border-black border-2 pl-2 hover:border-sky-700 hover:border-4' placeholder='Add hashtags' name="hashtags" />
                </div>

                {/* Submit Button */}
                <div className='w-full h-24 relative'>
                    <button type='submit' className='absolute right-10 top-5 border-black border-2 h-16 w-28 rounded-lg hover:bg-black hover:text-white'>Post</button>
                </div>


            </form>
        </div>
    )
}

export default AddPostCard;