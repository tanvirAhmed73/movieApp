const page = () => {
  const commentsData = [
    { id: "1", user: "John Doe", comment: "Great movie!", movieId: "1" },
    { id: "2", user: "Jane Smith", comment: "Enjoyed it a lot.", movieId: "2" },
  ];
  return (
    <div className="grid mx-10 gap-6">
      {commentsData.map((comment) => (
        <div
          key={comment.id}
          className="bg-white shadow-md rounded-lg overflow-hidden p-4"
        >
          <h2 className="text-lg font-bold mb-2">{comment.user}</h2>
          <p className="text-sm text-gray-600 mb-4">{comment.comment}</p>
          <p className="text-sm text-gray-600">Movie ID: {comment.movieId}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
