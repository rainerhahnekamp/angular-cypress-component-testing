
export function parseAddress(query: string): void {
  const shortPattern = /^([\w\s]+)\s(\d+)$/;
  const longPattern = /^([\w\s]+)\s(\d+),\s(\d+)\s([\w]+)$/;
  let match: string[] | null = query.match(shortPattern);

  if (match) {
    return
  } else {
    match = query.match(longPattern);
    if (match) {
      return;
    }
  }

  throw new Error('Could not parse address. Invalid format.');
}
