import type { Client } from "../types";

interface Props {
  clients: Client[];
}

export default function ClientTable({ clients }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((c) => (
          <tr key={c.clientId} className="border-b">
            <td>{c.clientId}</td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.createdAt}</td>
            <td>{c.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
