import React, { useState, useEffect } from 'react';

const AddComment = ({setAddComment}) => {

  const [commentObj, setCommentObj] = useState({
    user: "",
    comment: ""
  });

  const handleUserInput = (event) => {
    event.preventDefault();
    const {name, value} = event.target;

    setCommentObj({...commentObj, [name]: value});
  }

  const findOriginalPost = (allPosts) => {
    const currentPostId = localStorage.getItem("current-post");

    return allPosts.find((post) => post.uid === parseInt(currentPostId));
  }

  const handleAddComment = (event) => {
    event.preventDefault();
  
    // Get posts and current post
    const allPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const originalPost = findOriginalPost(allPosts);
  
    if (!originalPost) {
      return;
    }
  
    // Update commentsTotal and add the new comment
    originalPost.commentsTotal = (originalPost.commentsTotal || 0) + 1;
    originalPost.comments.push({
      username: commentObj.user ? commentObj.user : "Anon",
      comment: commentObj.comment,
    });
  
    // Find the index of the original post in the array
    const originalPostIndex = allPosts.findIndex((post) => post.uid === originalPost.uid);

    // Update post and send back to local storage
    allPosts[originalPostIndex] = originalPost;
    localStorage.setItem("posts", JSON.stringify(allPosts));

    // Update page
    setAddComment(true);
  
    // Clear the commentObj state for the next comment
    setCommentObj({
      user: "",
      comment: ""
    });
  };
  

  return (

    <div className="rounded-lg border border-gray-200 bg-white font-serif shadow-md max-w-2xl mx-auto md:w-2/3 lg:w-3/4 xl:w-4/5 mb-10 pb-16 p-4">

      <form onSubmit={handleAddComment} className="flex flex-col justify-between w-full">
      <div className="flex items-center mb-2">
          <h1 className="text-lg font-bold text-black dark:text-gray-700 ">Add Comment</h1>
        </div>
        <div className="flex flex-col mb-4">
          <label className="inline-block my-2 align-middle font-semibold">Username</label>
          <input
            onChange={handleUserInput}
            type="text"
            placeholder="Add Username"
            value={commentObj.user}
            name="user"
            className="p-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
          </div>

      <div className="flex flex-col mb-4">
          <label className="inline-block my-2 align-middle font-semibold">Add Comment</label>
          <textarea
            onChange={handleUserInput}
            type="textarea"
            placeholder="Enter your comment"
            value={commentObj.comment}
            name="comment"
            required
            className="p-2 w-full rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full text-left">
          <button type="submit" className="flex justify-center items-center gap-2 w-full py-2 px-4 text-white text-md font-bold border 
                      rounded-md ease-in-out duration-150 shadow-slate-600 md:px-6 bg-blue-500 hover:bg-white hover:text-blue-500">Submit Comment</button>
        </div>
      </form>
    </div>
  );
};
export default AddComment;
