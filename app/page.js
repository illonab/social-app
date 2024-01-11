"use client";
import MediaCard from "@/components/mediaCard";
import { useState, useEffect } from "react";
// Page for displaying post
export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Alex",
      text: "Cats, known for their graceful agility and independent demeanor, have captivated humans for centuries with their mysterious charm. From their soothing purrs to playful antics, these enigmatic feline companions continue to be beloved members of households worldwide.",
      image: "http://placekitten.com/500/500",
      hashtag: ["#cats", "#lovacats"],
      likes: 0,
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onUpdatePost = (updatedPost, index) => {
    const newPosts = [...posts];
    newPosts[index] = updatedPost;
    setPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  useEffect(() => {
    const newPosts = JSON.parse(localStorage.getItem("posts"));
    if (!newPosts) return;

    setPosts([newPosts]);
  }, []);

  let postsTorender = posts;
  console.log(postsTorender, "here");
  if (searchValue !== "") {
    const filteredPosts = posts.filter((post) => {
      return post.hashtag.includes(searchValue);
    });
    postsTorender = filteredPosts;
  }

  return (
    <main className="flex flex-col gap-20 justify-center w-screen py-20 items-center">
      <div className="flex flex-col items-center gap-5 w-full">
        <label htmlFor="search" className="block text-xl font-medium leading-6">
          Search post
        </label>
        <input
          onChange={handleSearchValue}
          type="text"
          name="search"
          className="block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
        />
      </div>

      {postsTorender.map((post, index) => {
        return (
          <MediaCard
            post={post}
            index={index}
            key={index}
            onUpdatePost={onUpdatePost}
          />
        );
      })}
    </main>
  );
}
