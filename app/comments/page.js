"use client";

import React, { useEffect, useState } from "react";
import AddComment from "@/components/AddComments";
import MediaCard from "@/components/mediaCard";
import CommentCard from "@/components/CommentCard";

const CommentPage = () => {
  const [addComment, setAddComment] = useState(false);
  const [addLike, setAddLike] = useState(false);

  useEffect(() => {
    setAddComment(false);
    setAddLike(false);
  }, [addComment, addLike]);

  if (typeof window === "undefined") {
    return null;
  }

  // Get all posts
  const allPosts = JSON.parse(localStorage.getItem("posts")) || [];

  const getOriginalPost = (allPosts) => {
    const currentPostId = localStorage.getItem("current-post");

    return allPosts.find((post) => post.uid === parseInt(currentPostId));
  };

  const onUpdatePost = () => {
    localStorage.setItem("posts", JSON.stringify([...allPosts]));
    setAddLike(true);
  };

  // Current Post
  const currentPost = getOriginalPost(allPosts);

  return (
    <main>
      <div className="w-full h-full flex flex-col justify-center items-center my-10 gap-4">
        <MediaCard post={currentPost} onUpdatePost={onUpdatePost} />

        <div className="flex flex-col w-3/4 gap-4 items-center justify-center">
          {currentPost.comments.map((comment, index) => {
            return (
              <CommentCard
                key={index}
                username={comment.username}
                comment={comment.comment}
              />
            );
          })}
        </div>

        <AddComment setAddComment={setAddComment} />
      </div>
    </main>
  );
};

export default CommentPage;
