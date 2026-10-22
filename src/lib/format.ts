/** Zero-based index → two-digit step label, e.g. 0 → "01". */
export const formatStep = (index: number) => String(index + 1).padStart(2, "0");
