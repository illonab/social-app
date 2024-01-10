"use client";
import MediaCard from "@/components/mediaCard";
import { useState } from "react";
// Page for displaying post
export default function Home() {
  const [posts, setPosts] = useState([
    {
      username: "Alex",
      text: "Cats, known for their graceful agility and independent demeanor, have captivated humans for centuries with their mysterious charm. From their soothing purrs to playful antics, these enigmatic feline companions continue to be beloved members of households worldwide.",
      image: "http://placekitten.com/500/500",
      likes: 0,
    },
  ]);
  /**
   * Posts is an array of objects. Each post is object with following fields:
   * image
   * text
   * username
   * likes
   */

  const onUpdatePost = (updatedPost, index) => {
    const newPosts = [...posts];
    newPosts[index] = updatedPost;
    setPosts(newPosts);

    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  return (
    <></>
  )
}
