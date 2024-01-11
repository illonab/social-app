import React, { useState, useEffect } from 'react';

const Comment = ({ postIndex, comments, onUpdatePost }) => {
  const [newComment, setNewComment] = useState('');
  const onAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      onUpdatePost({ ...comments, comments: updatedComments }, postIndex);
      setNewComment('');
    }
  };
    // Load comments from local storage on component
    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
          setNewComment (JSON.parse(storedComments));
        }
      }, []);
      // Save comments to local storage whenever comments change
      useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
      }, [comments]);
  return (
    <div>
    </div>
  );
};
export default Comment;