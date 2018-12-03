import { addAllClaimsToMatrix } from './5.js'

// ⭐: 6
const findFirstNonOverlappingClaim = claims => {
  const matrix = addAllClaimsToMatrix(claims)
  for (const claim of claims) {
    if (claimDoesntOverlap(claim, matrix)) return claim
  }
}

// check if a single claim overlaps
const claimDoesntOverlap = (claim, matrix) =>
  Object.values(matrix)
    .filter(tile => tile.has(claim.id))
    .every(tile => tile.size === 1)

export default findFirstNonOverlappingClaim

window.addAllClaimsToMatrix = addAllClaimsToMatrix
