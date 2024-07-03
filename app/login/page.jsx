import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
              <Link
                href={"/signUp"}
                className="hover:underline hover:text-red-500 text-sm"
              >
                Need To Create A Acoount?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>

            {/* Login with Google Button */}
            <div>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-3"
              >
                <span className="sr-only">Login with Google</span>
                <svg
                  className="h-5 w-5 text-gray-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8c4.41 0 8-3.59 8-8s-3.59-8-8-8zM5.59 6.59l-1.41 1.41 3.54 3.54-1.41 1.41-3.54-3.54zm10.5 2.72c-.18-.59-.67-1.09-1.26-1.33h-.01c-.38-.17-.81-.26-1.24-.26-.42 0-.85.09-1.24.26h-.01c-.59.24-1.08.74-1.26 1.33l-.36 1.11-.96.96c-.25.25-.35.62-.28.97.14.61.76 1.11 1.48 1.11h.18c.34 0 .68-.12.95-.33l.93-.93.93.93c.27.21.61.33.95.33h.18c.72 0 1.34-.5 1.48-1.11.07-.35-.03-.72-.28-.97l-.96-.96-.36-1.11zm-1.86 8.78c-.89.89-2.07 1.38-3.33 1.38s-2.44-.49-3.33-1.38c-.89-.89-1.38-2.07-1.38-3.33s.49-2.44 1.38-3.33l1.48-1.48c.89-.89 2.07-1.38 3.33-1.38s2.44.49 3.33 1.38c.89.89 1.38 2.07 1.38 3.33s-.49 2.44-1.38 3.33l-1.48 1.48zm-3.55-4.78l-3.55 3.55c-.29-.24-.55-.51-.77-.81l3.51-3.51c.3.22.57.48.81.77zm-.36-.5l-1.43 1.43c-.06.06-.09.14-.09.22s.03.16.09.22l1.43 1.43c.11.11.29.11.4 0l1.43-1.43c.06-.06.09-.14.09-.22s-.03-.16-.09-.22l-1.43-1.43c-.11-.11-.29-.11-.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
