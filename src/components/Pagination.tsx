import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { ELLIPSIS } from "../hooks/paginationModel";
import { usePagination } from "../hooks/usePagination";

type PaginationProps = {
  totalPages: number;
  activePage: number;
  onPageChange: (page: number) => void;
  showLabels?: boolean;
  ariaLabel?: string;
};

const pageButtonBase = "flex size-9 items-center justify-center rounded px-2 py-2 cursor-pointer";
const activeStyles =
  "text-neutral-900 shadow-[0_1px_3px_0px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] focus:shadow-[0_0px_0px_1px_rgba(68,76,231,0.1),0_0px_0px_4px_rgba(68,76,231,0.12)] focus:outline-none";
const inactiveStyles = "text-neutral-600";

export default function Pagination({
  totalPages,
  activePage,
  onPageChange,
  showLabels = true,
  ariaLabel = `Pagination - ${totalPages} pages`
}: PaginationProps) {
  const items = usePagination(totalPages, activePage);
  const isFirstPage = activePage <= 1;
  const isLastPage = activePage >= totalPages;

  const goTo = (p: number) => onPageChange(Math.max(1, Math.min(totalPages, p)));

  return (
    <nav
      className='flex justify-center gap-2 px-6 pt-3 pb-4'
      aria-label={ariaLabel}
    >
      <ul className='flex rounded px-1 py-1'>
        <li className='flex items-center'>
          <button
            type='button'
            onClick={() => goTo(activePage - 1)}
            disabled={isFirstPage}
            aria-label='go to previous page'
            className={`flex cursor-pointer gap-2 text-sm font-medium text-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-400 ${
              showLabels ? "px-4 py-1.5" : "px-2.5 py-1.5"
            }`}
          >
            <RiArrowLeftSLine className='size-5' />
            {showLabels && "Previous"}
          </button>
        </li>

        {items.map((item, index) =>
          item === ELLIPSIS ? (
            <li
              key={`ellipsis-${index}`}
              className='flex items-center justify-center'
            >
              <span
                aria-hidden='true'
                className='flex size-9 items-center justify-center rounded px-2 py-2 text-neutral-600 select-none'
              >
                ...
              </span>
            </li>
          ) : (
            <li key={item}>
              {item === activePage ? (
                <span
                  aria-current='page'
                  aria-label={`Page ${item}, current page`}
                  className={`${pageButtonBase} ${activeStyles}`}
                >
                  {item}
                </span>
              ) : (
                <button
                  type='button'
                  onClick={() => goTo(item)}
                  aria-label={`Page ${item}`}
                  className={`${pageButtonBase} ${inactiveStyles}`}
                >
                  {item}
                </button>
              )}
            </li>
          )
        )}

        <li className='flex items-center'>
          <button
            type='button'
            onClick={() => goTo(activePage + 1)}
            disabled={isLastPage}
            aria-label='go to next page'
            className={`flex cursor-pointer gap-2 text-sm font-medium text-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-400 ${
              showLabels ? "px-4 py-1.5" : "px-2.5 py-1.5"
            }`}
          >
            {showLabels && "Next"}
            <RiArrowRightSLine className='size-5' />
          </button>
        </li>
      </ul>
    </nav>
  );
}
