// ⭐: 5
const countOverlappingClaims = claims => {
  const matrix = addAllClaimsToMatrix(claims)
  const overlappingCoords = Object.values(matrix).filter(coord => coord.size > 1)
  return overlappingCoords.length
}

// add all coords for a single claim into an object matrix
export const addClaimToMatrix = (claim, matrix) => {
  for (let i = 0; i < claim.w; i++) {
    const x = claim.x + 1 + i

    for (let i = 0; i < claim.h; i++) {
      const y = claim.y + 1 + i
      const tile = `${x},${y}`
      matrix[tile] = matrix[tile] ? matrix[tile].add(claim.id) : new Set([claim.id])
    }
  }
  return matrix
}

// take a list of claims and add them all to a new object
export const addAllClaimsToMatrix = claims =>
  claims.reduce((matrix, claim) => addClaimToMatrix(claim, matrix), {})

export default countOverlappingClaims
