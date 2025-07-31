import type { Client, SortCriterion } from "../types";

export function applyMultiSort(
  data: Client[],
  criteria: SortCriterion[]
): Client[] {
  return [...data].sort((a, b) => {
    for (const { key, order } of criteria) {
      let valA: (string | number) = a[key];
      let valB: string | number = b[key];

      if (key === "createdAt" || key === "updatedAt") {
        valA = new Date(valA).getTime(); // compare as number
        valB = new Date(valB).getTime();
      }

      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
    }
    return 0;
  });
}
