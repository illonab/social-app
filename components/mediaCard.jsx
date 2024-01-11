// Displaying the user post
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import TimeAgo from 'timeago-react';
import Link from 'next/link';

const MediaCard = ({post, onUpdatePost, index}) => {

    const onChangeLike = (e) => {
        console.log("clicked")

        post.likes = post.likes + 1;

        onUpdatePost(post, index)
    }


    return (
  
        <article className=" rounded-lg border border-gray-200 bg-white shadow-md  max-w-lg">
            <div className="flex items-center p-6">
                <p>{post.username}</p>
                <TimeAgo datetime={new Date().toISOString()}  opts={{minInterval: 60}} className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-2" />

            </div>

            <img class="rounded-t-lg" src={post.image} alt="card image" loading="lazy" width="500" height="500"/>

            <div className="flex flex-col justify-center gap-4 p-6">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {post.text}
                </p>
                <div className="flex justify-between">
                    <div className="flex cursor-pointer" onClick={onChangeLike}>
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                        </svg>
                        <p className="ml-2">{post.likes}</p>
                    </div>
                    <div className="flex">
                        <Link href="/comments">
                        <p>0</p>
                        <p className="ml-2">Comments</p>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </article>

      );
    
}

export default MediaCard;