// return a copy of a string with a char replaced at a given index
export const replaceCharAt = (index, string, replacement) =>
  string.slice(0, index) + replacement + string.slice(index + 1)

export const anyCharAppearsNTimes = (string, times) => {
  const charSet = new Set(string)
  for (const char of charSet) {
    const match = string.match(new RegExp(char, 'g'))
    if (match && match.length === times) return true
  }
  return false
}

// convert a claim string into a claim object
export const parseClaim = claim => {
  const match = claim.match(/#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/)
  return {
    id: parseInt(match[1]),
    x: parseInt(match[2]),
    y: parseInt(match[3]),
    w: parseInt(match[4]),
    h: parseInt(match[5])
  }
}
