'use client'
import React, { useState } from 'react';
import Comment from "/components/comments"; 
import MediaCard from "/components/MediaCard"

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const onAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');
    }
  };
  return (
    <div className="container mx-auto mt-8 p-4">
      <header className="text-2xl font-bold mb-4">Comment Page</header>
      {/* Existing Comments Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Existing Comments:</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="mb-2">
              {comment}
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      {/* Add New Comment Form */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Add a New Comment:</h2>
        <form className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Type your comment here..."
            className="mr-2 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={onAddComment}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Comment
          </button>
        </form>
      </div>
      {/* Comment Component */}
      <Comment comments={comments} onUpdatePost={() => {}} />
    </div>
  );
};

export default CommentPage;
