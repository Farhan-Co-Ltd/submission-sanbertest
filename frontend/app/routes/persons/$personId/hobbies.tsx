import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetchHobbiesByPersonId } from "../../../api/hobbies";

export async function loader({ params }) {
  const hobbies = await fetchHobbiesByPersonId(params.personId);
  return json(hobbies);
}

export default function Hobbies() {
  const hobbies = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Hobbies</h1>
      <Form method="post" className="mb-6">
        <input
          type="text"
          name="hobby"
          placeholder="Enter a hobby"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Add Hobby
        </button>
      </Form>
      <ul className="space-y-2">
        {hobbies.map((hobby) => (
          <li
            key={hobby.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <span className="text-gray-900">{hobby.name}</span>
            <Form method="post" action={`/hobbies/${hobby.id}/delete`}>
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300">
                Delete
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
}
