import { useState } from "react";

// Page layout for adding post
const AddPostCard = ({setIsError, setIsSubmit, isError, isSubmit}) => {
    const [postObj, setPostObj] = useState({
        username: '',
        text: '',
        likes: 0,
        hashtag: '',
        images: '',
    });

    // Handle user input
    const handleInput = (event) => {
        const { name, value } = event.target;

        setPostObj({ ...postObj, [name]: value });
    };

    // Get existing posts from local storage
    const getLocalPosts = () => {
        const existingPosts = JSON.parse(localStorage.getItem("posts"));
        console.log(existingPosts, "123")
        if(!existingPosts) {
             return [{...postObj, hashtag: postObj.hashtag.split(" ")}]
        }
        return [{...postObj, hashtag: postObj.hashtag.split(" ")}, ...existingPosts];
    };

    // Add post to local storage
    const handleAddPost = (event) => {
        event.preventDefault();

        // Deals with invalid inputs
        if (!postObj.username || !postObj.text || !postObj.hashtag) {
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
                images: ""
            });

            // Hide Notification
            setIsSubmit(false);
        }, 3000)
    };


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
                                <input
                                    onChange={handleInput}
                                    value={postObj.username}
                                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full 
                                               w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                               focus:border-blue-500 md:w-full"
                                    type="text"
                                    placeholder="Enter your username"
                                    name="username"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Text</label>
                            <input
                                onChange={handleInput}
                                value={postObj.text}
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full 
                                            outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                            focus:border-blue-500 md:w-full"
                                type="textarea"
                                placeholder="Add your message"
                                name="text"
                            />
                        </div>
                    </div>

                    {/* # */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Add #</label>
                            <input
                                onChange={handleInput}
                                value={postObj.hashtag}
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full 
                                            outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 
                                            focus:border-blue-500 md:w-full"
                                type="textarea"
                                placeholder="Add your hashtag"
                                name="hashtag"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                        <div className="text-left flex flex-col gap-2 w-full md:col-span-2">
                            <label className="font-semibold">Link</label>
                            <input
                                onChange={handleInput}
                                value={postObj.images}
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none 
                                            rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 md:w-full"
                                placeholder="Add Image Link"
                                name="images"
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