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
    <div className="h-1/4 w-2/4 rounded-lg shadow-lg p-2">

      <form onSubmit={handleAddComment} className="w-full h-full rounded-lg shadow-lg">
        <h1>Add Comment</h1>
        <div className="flex flex-col gap-4 h-3/4 w-3/5 p-4">
          <div className="flex flex-col border-2 border-black rounded-md">
            <label>Username</label>
            <input onChange={handleUserInput} type="text" placeholder="Add Username" value={commentObj.user} name="user"/>
          </div>

          <div className="flex flex-col border-2 border-black rounded-md">
            <label>Add Comment</label>
            <input onChange={handleUserInput} type="textarea" placeholder="Enter your comment" value={commentObj.comment} name="comment" required/>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <button type="submit" className="bg-blue-500 font-bold">Submit Comment</button>
        </div>
      </form>
    </div>
  );
};
export default AddComment;