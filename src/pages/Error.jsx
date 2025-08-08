import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content px-4">
      <div className="text-center space-y-6 max-w-xl">
        <div className="inline-flex items-center gap-4 animate-pulse">
          <FaExclamationTriangle className="text-6xl text-red-500" />
          <h1 className="text-6xl font-extrabold text-primary">404</h1>
        </div>

        {/* Message */}
        <p className="text-3xl font-bold text-gray-800 ">
          Page Not Found
        </p>
        <p className="text-base text-gray-600">
          Sorry, the page you're looking for doesn’t exist, has been moved, or removed.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="btn bg-blue-600 border-none btn-wide text-base text-white shadow-md hover:shadow-xl transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
export default Error;
