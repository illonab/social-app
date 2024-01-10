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
        const existingPosts = JSON.parse(localStorage.getItem('posts')); // Posts is the name of the key in the local storage. So we can access

        // Error Handling: If there is no 'posts' in local storage, nothing will happen
        if (!existingPosts) {
            return;
        }
        
        // Resets the PostObj, with the updated data (Line 20)
        setPostObj(() => { 
            // Returns the back to postObj + with the Likes Key and 0 Value
            return {...postObj, likes: 0}
        });

        // Concats the existing post with the new post
        const posts = [...existingPosts, postObj];

        // Update Local storage with the existing and new post
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    return (
<div className="container mx-auto">
        <div className="lg:w-4/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-2xl my-20 rounded-md mx-auto">
            <div className="pb-5">
                <h1 className="text-3xl text-center font-bold">Add Yours</h1>
                <p className="text-center text-xl">Add your book review favourite quote etc</p>
            </div>
            <form onSubmit={handleAddPost} className="flex flex-col justify-start items-center w-full m-auto">

                {/* User Id */}
                <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                    <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                        <label className="font-semibold">Username</label>
                        <div className="flex items-center">
                            <input onChange={handleInput} className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 md:w-full" type="text" placeholder="Enter your username" name="username" />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                    <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                        <label className="font-semibold">Text</label>
                        <input onChange={handleInput} className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 md:w-full" type="textarea" placeholder="Add your message" name="text" />
                    </div>
                </div>

                {/* Text 2 */}
                <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                    <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                        <label className="font-semibold">Text 2</label>
                        <input onChange={handleInput} className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 md:w-full" type="textarea" placeholder="Add your message" name="text" />
                    </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                    <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                        <label className="font-semibold">Link</label>
                        <input onChange={handleInput} className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 md:w-full" placeholder="Add Image Link" name="images" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="w-full text-left">
                    <button type="submit" className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6" title="Post">
                    Post
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default AddPostCard;