import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Welcome to the Person Management App
      </h1>
      <Link to="/persons">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Go to Persons
        </button>
      </Link>
    </div>
  );
}
