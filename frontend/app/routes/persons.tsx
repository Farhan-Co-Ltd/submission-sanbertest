import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetchPersons } from "../api/persons";

export async function loader() {
  const persons = await fetchPersons();
  return json(persons);
}

export default function Persons() {
  const persons = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Persons</h1>
      <Link to="/persons/new">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300">
          Add New Person
        </button>
      </Link>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {persons.map((person) => (
              <tr
                key={person.id}
                className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {person.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {person.phone}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {person.email}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link
                    to={`/persons/${person.id}`}
                    className="text-blue-500 hover:text-blue-700 mr-2">
                    View
                  </Link>
                  <Link
                    to={`/persons/${person.id}/hobbies`}
                    className="text-green-500 hover:text-green-700 mr-2">
                    Hobbies
                  </Link>
                  <Link
                    to={`/persons/${person.id}/favorite-characters`}
                    className="text-purple-500 hover:text-purple-700">
                    Fave Chars
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
