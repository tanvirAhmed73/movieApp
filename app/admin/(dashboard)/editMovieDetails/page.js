const page = () => {
  return (
    <div className="container mx-auto py-8 mb-5">
      <h1 className="md:text-3xl text-center font-bold mb-8">Edit Movie : Movie Title Need to Add</h1>
      <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-bold  text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="block w-full mt-1 border-2 border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-bold text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            className="block w-full mt-1 border-gray-300 border-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-bold text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Update Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
