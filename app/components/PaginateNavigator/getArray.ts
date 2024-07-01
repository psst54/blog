export function getArray({
  currentPage,
  maxPage,
}: {
  currentPage: number;
  maxPage: number;
}) {
  const LENGTH = 7,
    HALF_LENGTH = (LENGTH - 1) / 2;

  let arrayCount = LENGTH - 1;
  let ret = [];
  ret.push(currentPage);

  let prev = currentPage - 1;
  let next = currentPage + 1;
  for (
    let prevCount = HALF_LENGTH;
    prev > 0 && prevCount > 0;
    prev--, prevCount--, arrayCount--
  ) {
    ret.unshift(prev);
  }
  for (
    let nextCount = HALF_LENGTH;
    next <= maxPage && nextCount > 0;
    next++, nextCount--, arrayCount--
  ) {
    ret.push(next);
  }

  while (prev > 0 && arrayCount > 0) {
    ret.unshift(prev);
    prev--;
    arrayCount--;
  }
  while (next <= maxPage && arrayCount > 0) {
    ret.push(next);
    next++;
    arrayCount--;
  }

  return ret;
}
