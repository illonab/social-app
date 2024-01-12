const CommentCard = ({ username, comment }) => {
    return (
      <div className="rounded-lg border border-gray-200 bg-white shadow-md max-w-2xl mx-auto md:w-2/3 lg:w-3/4 xl:w-4/5 flex flex-col md:flex-row p-4">

        <div className="flex items-center mb-2">
          <h2 className="text-lg font-bold text-black dark:text-gray-700">{username}</h2>
        </div>

        <div className="pl-4">
          <h3 className="text-sm md:text-base text-gray-700 dark:text-gray-400">{comment}</h3>
        </div>
      </div>
    );
  };
  
  export default CommentCard;
  