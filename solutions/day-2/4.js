import { replaceCharAt } from '../../helpers.js'

// ⭐: 4
const findPrototypeFabric = ([currentBoxId, ...otherBoxIds]) => {
  if (!currentBoxId) return null
  return prototypeFabricFound(currentBoxId, otherBoxIds) ||
    findPrototypeFabric(otherBoxIds)
}

// check if prototype fabric is found in a single loop
export const prototypeFabricFound = (currentBoxId, boxIds) => {
  for (const boxId of boxIds) {
    let differenceCount = 0
    let differingIndex

    for (const index in currentBoxId) {
      if (currentBoxId[index] !== boxId[index]) {
        differenceCount++
        differingIndex = parseInt(index)
      }
      if (differenceCount > 1) break
    }

    if (differenceCount === 1) {
      return replaceCharAt(differingIndex, currentBoxId, '')
    }
  }
}

export default findPrototypeFabric
