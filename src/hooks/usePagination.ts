import { useMemo } from "react";
import { getPaginationItems, type PaginationItem } from "./paginationModel";

export function usePagination(totalPages: number, activePage: number): PaginationItem[] {
  return useMemo(() => getPaginationItems(totalPages, activePage), [totalPages, activePage]);
}
