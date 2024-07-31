export const getPagination: (
  pagesCount: number,
  activePage: number
) => Array<string | number> = (pagesCount, activePage) => {
  if (pagesCount <= 6) {
    let result = [];
    let i = 1;
    while (i <= pagesCount) {
      result.push(i);
      i++;
    }
    return result;
  }
  if (activePage < 3 && pagesCount > 6) {
    let result = [];
    let i = 1;
    while (i <= 3) {
      result.push(i);
      i++;
    }
    return [...result, '...', pagesCount - 2, pagesCount - 1, pagesCount];
  }
  if (activePage > 2 && pagesCount - activePage > 1) {
    return [
      1,
      '...',
      activePage - 1,
      activePage,
      activePage + 1,
      '...',
      pagesCount,
    ];
  }
  if (activePage > 2 && pagesCount - activePage <= 3) {
    let result = [1, 2, 3, '...'];
    let i = pagesCount - 2;
    while (i <= pagesCount) {
      result.push(i);
      i++;
    }
    return result;
  }
  if (activePage > 2 && pagesCount < 6) {
    let i = activePage - 1;
    let result = [1, '...'];
    while (i <= pagesCount) {
      result.push(i);
      i++;
    }
    return result;
  } else return [];
};
