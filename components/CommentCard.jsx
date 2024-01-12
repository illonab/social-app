const CommentCard = ({username, comment}) => {
    return (
        <div className="flex flex-col justify-center w-2/4 h-24 border-2 border-black gap-2 pl-4">
            <div>
                <h2 className="font-semibold">{username}</h2>
            </div>
            <div className="pl-4">
                <h3 className="font-semibold">{comment}</h3>
            </div>
        </div>
    )
}

export default CommentCard;