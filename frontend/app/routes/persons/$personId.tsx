import { useLoaderData, Link, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetchPersonById } from "../../api/persons";

export async function loader({ params }) {
  const person = await fetchPersonById(params.personId);
  return json(person);
}

export default function PersonDetail() {
  const person = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{person.name}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Phone:</span> {person.phone}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Email:</span> {person.email}
      </p>
      <div className="flex space-x-4">
        <Link to={`/persons/${person.id}/edit`}>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
            Edit
          </button>
        </Link>
        <Form method="post" action={`/persons/${person.id}/delete`}>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
}
