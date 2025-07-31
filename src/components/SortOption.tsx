import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { SortCriterion } from "../types";

interface Props {
  criterion: SortCriterion;
  setCriteria: React.Dispatch<React.SetStateAction<SortCriterion[]>>;
}

export default function SortOption({ criterion, setCriteria }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: criterion.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const toggleOrder = () => {
    setCriteria((prev: SortCriterion[]) =>
      prev.map((c) =>
        c.id === criterion.id
          ? { ...c, order: c.order === "asc" ? "desc" : "asc" }
          : c
      )
    );
  };

  const remove = () => {
    setCriteria((prev: SortCriterion[]) =>
      prev.filter((c) => c.id !== criterion.id)
    );
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex justify-between items-center border border-amber-400 p-2 mb-2 bg-gray-50 rounded"
    >
      <span className="capitalize">{criterion.key}</span>
      <div className="space-x-2">
        <button onClick={toggleOrder} className="text-blue-600">
          {criterion.order === "asc" ? "A-Z" : "Z-A"}
        </button>
        <button onClick={remove} className="text-red-500">
          ✕
        </button>
      </div>
    </div>
  );
}
