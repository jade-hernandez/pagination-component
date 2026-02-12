export const ELLIPSIS = "..." as const;
export type PaginationItem = number | typeof ELLIPSIS;

export function getPaginationItems(totalPages: number, activePage: number): PaginationItem[] {
  if (totalPages <= 0) return [];

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const a = Math.max(0, Math.min(activePage - 1, totalPages - 1));

  // tweak this threshold if your design wants ellipses sooner
  if (totalPages <= 7) return pages;

  const visible = new Set<number>([0, totalPages - 1]);

  if (a === 0) {
    visible.add(1);
    visible.add(totalPages - 2);
  } else if (a <= 2) {
    for (let i = 1; i <= a + 1; i++) visible.add(i);
  } else if (a >= totalPages - 3) {
    for (let i = a - 1; i <= totalPages - 2; i++) visible.add(i);
  } else {
    visible.add(a - 1);
    visible.add(a);
    visible.add(a + 1);
  }

  const idx = [...visible].sort((x, y) => x - y);

  const out: PaginationItem[] = [];
  for (let k = 0; k < idx.length; k++) {
    const i = idx[k];
    if (k > 0 && i - idx[k - 1] > 1) out.push(ELLIPSIS);
    out.push(pages[i]);
  }

  return out;
}
