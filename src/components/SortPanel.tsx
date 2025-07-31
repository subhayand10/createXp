import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { SortCriterion } from "../types";
import SortOption from "../components/SortOption"; // ✅ Fixed path

interface Props {
  criteria: SortCriterion[];
  setCriteria: React.Dispatch<React.SetStateAction<SortCriterion[]>>;
}

export default function SortPanel({ criteria, setCriteria }: Props) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = criteria.findIndex((c) => c.id === active.id);
    const newIndex = criteria.findIndex((c) => c.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      setCriteria(arrayMove(criteria, oldIndex, newIndex));
    }
  };

  return (
    <div className="border p-4 w-80 bg-white rounded shadow">
      <h2 className="font-bold mb-2">Sort By</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={criteria.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          {criteria.map((criterion) => (
            <SortOption
              key={criterion.id}
              criterion={criterion}
              setCriteria={setCriteria}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
