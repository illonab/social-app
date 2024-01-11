'use client';

import AddPostNotification from "../../components/AddPostNotification";
import AddPostCard from "../../components/addPostCard";
import { useState } from "react";


// Page layout for adding post
const AddPostPage = () => {

    const [isError, setIsError] = useState(false);  // Submit or Rejected
    const [isSubmit, setIsSubmit] = useState(false);  // Displays Notification

    return (
        <div className='h-full w-full relative gap-8'>
        {isSubmit && (
            <div className={`w-full h-32 flex items-center justify-end pr-10 ${isSubmit ? 'animate-pulse' : 'hidden'}`}>
                <AddPostNotification isError={isError} setIsSubmit={setIsSubmit} />
            </div>
        )}
            <AddPostCard setIsError={setIsError} setIsSubmit={setIsSubmit} isError={isError} isSubmit={isSubmit} /> 
        </div>
    )
}

export default AddPostPage;