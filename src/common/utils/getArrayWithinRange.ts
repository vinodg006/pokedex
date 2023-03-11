export const getArrayWithinRange = (startIndex: number, endIndex: number) => {
  const length = endIndex - startIndex + 1
  return Array.from({ length }, (_, index) => index + startIndex)
}
