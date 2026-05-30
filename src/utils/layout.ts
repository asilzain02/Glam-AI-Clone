export function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let index = 0; index < items.length; index += size) rows.push(items.slice(index, index + size));
  return rows;
}

export function getCardWidth(containerWidth: number, columns: number, gap = 16) {
  return Math.floor((containerWidth - gap * (columns - 1)) / columns);
}
