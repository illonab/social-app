'use client';

import AddPostNotification from "../../components/AddPostNotification";
import AddPostCard from "../../components/addPostCard";


// Page layout for adding post
const AddPostPage = () => {
    return (
        <div className='h-full w-full gap-8'>
            <AddPostNotification uploadState={false} />
            <AddPostCard /> 
        </div>
    )
}

export default AddPostPage;