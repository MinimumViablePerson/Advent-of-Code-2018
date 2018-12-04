import { addAllClaimsToMatrix } from './5.js'

// ⭐: 6
const findFirstNonOverlappingClaim = claims => {
  const matrix = addAllClaimsToMatrix(claims)
  const matrixValues = Object.values(matrix)
  for (const claim of claims) {
    if (claimDoesntOverlap(claim, matrixValues)) return claim
  }
}

// check if a single claim overlaps
const claimDoesntOverlap = (claim, matrixValues) =>
  matrixValues
    .filter(tile => tile.has(claim.id))
    .every(tile => tile.size === 1)

export default findFirstNonOverlappingClaim
