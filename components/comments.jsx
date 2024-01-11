import React, { useState } from 'react';

const Comment = ({ postIndex, comments, onUpdatePost }) => {
  const [newComment, setNewComment] = useState('');

  const onAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      onUpdatePost({ ...comments, comments: updatedComments }, postIndex);
      setNewComment('');
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default Comment;