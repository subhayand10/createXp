import { useState } from "react";
import ClientTable from "./components/ClientTable";
import SortPanel from "./components/SortPanel";
import { clients } from "./data/clients";
import { applyMultiSort } from "./utils/sortUtils";
import type { SortCriterion } from "./types";
import { nanoid } from "nanoid";

function App() {
  const [criteria, setCriteria] = useState<SortCriterion[]>([
    {
      id: nanoid(),
      key: "email",
      order: "asc",
    },
  ]);

  const sortedClients = applyMultiSort(clients, criteria);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Clients</h1>
      <div className="flex gap-6">
        <SortPanel criteria={criteria} setCriteria={setCriteria} />
        <ClientTable clients={sortedClients} />
      </div>
    </div>
  );
}

export default App;
