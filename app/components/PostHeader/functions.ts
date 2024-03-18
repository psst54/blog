import type { PlainCategory } from "~/types";

export function getAncestors({
  categoryData,
  id,
}: {
  categoryData: PlainCategory[];
  id: string;
}) {
  if (!id) return [];
  let ret = [];

  while (id !== null) {
    ret.unshift(categoryData[id]);
    id = categoryData[id].parentId;
  }

  return ret;
}

export function formatDate(dateString: string | null) {
  if (!dateString) return "";

  const dateObject = new Date(dateString);
  const utc = dateObject.getTime() + dateObject.getTimezoneOffset() * 60 * 1000;
  const TIME_DIFF = 9 * 60 * 60 * 1000;
  const ktc = new Date(utc + TIME_DIFF);

  const year = ktc.getFullYear();
  const month = ktc.getMonth() + 1;
  const date = ktc.getDate();

  return year + "." + padNumber(month) + "." + padNumber(date) + ".";
}

function padNumber(number: number) {
  if (number < 10) return "0" + number;
  return number;
}
