import MediaCard from "@/components/mediaCard";

const a = {
    username: "Hi",
    image: "",
    likes: ""
}

const CommentsPage = () => {
    return (
        <>
            <MediaCard post={a} />
        </>
    )
}

export default CommentsPage;