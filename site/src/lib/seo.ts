export function plainText(value: unknown): string {
  return String(value ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_#>]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function metaDescription(...candidates: unknown[]): string {
  const text = candidates.map(plainText).find((candidate) => candidate.length > 0) ?? "";
  if (text.length <= 158) return text;

  const hard = text.slice(0, 155);
  const boundary = Math.max(hard.lastIndexOf("."), hard.lastIndexOf(";"), hard.lastIndexOf(","), hard.lastIndexOf(" "));
  return `${hard.slice(0, boundary > 90 ? boundary : 155).trim()}...`;
}
