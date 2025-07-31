export type SortKey = "name" | "email" | "createdAt" | "updatedAt" | "clientId";

export interface Client {
  clientId: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

export interface SortCriterion {
  id: string; // unique for drag
  key: SortKey;
  order: "asc" | "desc";
}
