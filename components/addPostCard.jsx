import { useState } from "react";

// Page layout for adding post
const AddPostCard = ({setIsError, setIsSubmit, isError, isSubmit}) => {
    const [postObj, setPostObj] = useState({
        username: '',
        booktitle: '', // added booktitle
        text: '',
        likes: 0,
        hashtag: '',
        image: '',
    });

    // Handle user input
    const handleInput = (event) => {
        const { name, value } = event.target;

        setPostObj({ ...postObj, [name]: value });
    };

    // Get existing posts from local storage
    const getLocalPosts = () => {
        const existingPosts = JSON.parse(localStorage.getItem("posts"));
        if(!existingPosts) {
            return [{...postObj, hashtag: postObj.hashtag.split(" ")}];

        }

        const allPosts = [{...postObj, hashtag: postObj.hashtag.split(" "), booktitle: postObj.booktitle}, ...existingPosts] //added booktitle

 
        return allPosts;
    };

    // Add post to local storage
    const handleAddPost = (event) => {
        event.preventDefault();

        // Deals with invalid inputs
        if (!postObj.username || !postObj.text || !postObj.hashtag || !postObj.booktitle) {
            // Display notification & Show invalid
            setIsSubmit(true);
            setIsError(true);

            setTimeout(() => {
                // Hide Notification
                setIsSubmit(false);
            }, 3000);
            return;
        }

        const posts = getLocalPosts();

        localStorage.setItem("posts", JSON.stringify(posts));

        // Show Notification as Added
        setIsSubmit(true);
        setIsError(false);

        setTimeout(() => {
            // Reset Post
            setPostObj({
                username: "",
                text: "",
                likes: 0,
                hashtag: "",
                image: "",
                booktitle: "",
            });

            // Hide Notification
            setIsSubmit(false);
        }, 3000)
    };

//added book field and copy updates
    return (

<div className="flex container mx-auto py-10 mb-10 min-h-screen font-serif"> 
        <div className="rounded-lg border border-gray-200 lg:w-5/12 md:w-10/12 sm:w-full p-4 flex flex-wrap justify-center shadow-2xl mb-20 mx-auto bg-white">
            <div className="pb-3">
                <h1 className="text-3xl text-center font-serif font-bold py-6">Add to Your Shelf</h1>
                <p className="text-center text-xl font-serif pb-4">Share your review, turn a page.</p>
            </div>
            <form onSubmit={handleAddPost} className="flex flex-col justify-start items-center w-full m-auto">
                
                    {/* User Id */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Username</label>
                            <div className="flex items-center">
                                <input
                                    onChange={handleInput}
                                    value={postObj.username}
                                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full 
                                               w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                               focus:border-blue-500 md:w-full"
                                    type="text"
                                    placeholder="What should we call you?"
                                    name="username"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Book Name */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Book Title</label>
                            <div className="flex items-center">
                                <input
                                    onChange={handleInput}
                                    value={postObj.booktitle}
                                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full 
                                               w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                               focus:border-blue-500 md:w-full"
                                    type="text"
                                    placeholder="What's the name of the book?"
                                    name="booktitle"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Text */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Review</label>
                            <textarea
                                onChange={handleInput}
                                value={postObj.text}
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full 
                                            outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                            focus:border-blue-500 md:w-full"
                                type="textarea"
                                placeholder="How was it?"
                                name="text"
                                row="5"
                            />
                        </div>
                    </div>

                    {/* # */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Add your #hashtags</label>
                            <input
                                onChange={handleInput}
                                value={postObj.hashtag}
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full 
                                            outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                            focus:border-blue-500 md:w-full"
                                type="textarea"
                                placeholder="#fantasy #nonfiction #novel #cookbook"
                                name="hashtag"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Image</label>
                            <input
                                onChange={handleInput}
                                value={postObj.image}
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none 
                                            rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 md:w-full"
                                placeholder="Add Image Link"
                                name="image"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full text-left">
                    <button
                        type="submit"
                        className={`flex justify-center items-center gap-2 w-full py-3 px-4 text-white text-md font-bold border 
                                    rounded-md ease-in-out duration-150 shadow-slate-600 lg:m-0 md:px-6
                                    ${isSubmit ? !isError ? 'bg-green-500' : 'bg-red-500' : 'bg-blue-500 hover:bg-white hover:text-blue-500'}`}
                        style={{ pointerEvents: isSubmit ? 'none' : 'auto' }}
                        title="Post"
                    >
                        Post
                    </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddPostCard;