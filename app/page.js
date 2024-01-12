"use client";

import MediaCard from "/components/mediaCard";
import { useState, useEffect } from "react";

// Page for displaying post
export default function Home() {
  const [posts, setPosts] = useState([  ]);

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
    if (!newPosts) {
      return;
    }

    setPosts(newPosts);
  }, []);

  let postsToRender = posts;
  if (searchValue !== "") {
    const normaziledSearchValue = searchValue.trim();

    postsToRender = posts.filter((post) =>
      (post.hashtag || []).some((hashtagItem) =>
        hashtagItem.includes(normaziledSearchValue)
      )
    );
  }

  // size and copy update
  return (
    <main className="flex flex-col gap-20 justify-center w-screen py-20 items-center">
      <div className="flex flex-col items-center gap-5 w-1/2">
        <label htmlFor="search" className="block font-serif text-2xl font-bold leading-6 text-nowrap">
          Search the library
        </label>
        <input
          onChange={handleSearchValue}
          type="text"
          name="search"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
        />
      </div>

      {postsToRender.map((post, index) => {
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