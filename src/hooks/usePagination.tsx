import { useContext, useMemo } from 'react';

import { PaginationContext } from '../context/PaginationContext';
import { getArrayWithinRange } from '../common/utils/getArrayWithinRange';

export const DOTS = '...';

export interface IPagination {
  itemsTotal: number;
  itemsPerPage: number;
}

export const usePagination = ({ itemsTotal, itemsPerPage }: IPagination) => {
  const { currentPage } = useContext(PaginationContext);

  const paginatedPagesList = useMemo(() => {
    const totalPageCount = Math.ceil(itemsTotal / itemsPerPage);

    const totalPageNumbers = 5;

    if (totalPageNumbers >= totalPageCount) {
      return getArrayWithinRange(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage, 1);
    const rightSiblingIndex = Math.min(currentPage, totalPageCount);

    const isLeftDots = leftSiblingIndex > 2;
    const isRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!isLeftDots && isRightDots) {
      const leftRange = getArrayWithinRange(1, 2);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (isLeftDots && !isRightDots) {
      const rightRange = getArrayWithinRange(
        totalPageCount - 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (isLeftDots && isRightDots) {
      const middleRange = getArrayWithinRange(
        leftSiblingIndex,
        rightSiblingIndex
      );
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [itemsTotal, itemsPerPage, currentPage]);

  return paginatedPagesList;
};
